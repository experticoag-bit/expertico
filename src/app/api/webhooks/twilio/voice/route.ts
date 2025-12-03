import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Twilio Voice Webhook Handler
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const callSid = formData.get('CallSid') as string;
    const from = formData.get('From') as string;
    const to = formData.get('To') as string;
    const callStatus = formData.get('CallStatus') as string;

    if (!callSid || !from || !to) {
      return new NextResponse('Missing required parameters', { status: 400 });
    }

    // Find organization by phone number
    const org = await prisma.organization.findFirst({
      where: { phone: to },
      include: {
        agents: {
          where: {
            type: 'REZEPTION',
            status: 'ACTIVE',
          },
          take: 1,
        },
      },
    });

    if (!org || !org.agents[0]) {
      // Return TwiML for unavailable
      const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say language="de-CH">Es tut uns leid, dieser Anschluss ist derzeit nicht verfügbar.</Say>
  <Hangup/>
</Response>`;
      return new NextResponse(twiml, {
        headers: { 'Content-Type': 'text/xml' },
      });
    }

    // Create or update call record
    const call = await prisma.call.upsert({
      where: { twilioSid: callSid },
      update: {
        status: callStatus as any,
      },
      create: {
        twilioSid: callSid,
        direction: 'INBOUND',
        callerNumber: from,
        organizationId: org.id,
        agentId: org.agents[0].id,
        status: callStatus as any,
      },
    });

    // Update agent stats
    if (callStatus === 'completed') {
      await prisma.agent.update({
        where: { id: org.agents[0].id },
        data: {
          totalCalls: {
            increment: 1,
          },
        },
      });
    }

    // Return TwiML to connect to ElevenLabs/Vapi
    // For now, return a simple response
    // In production, you would connect to your voice AI service here
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say language="de-CH">Guten Tag, Sie erreichen ${org.name}. Wie kann ich Ihnen helfen?</Say>
  <Gather input="speech" language="de-CH" timeout="3" action="/api/webhooks/twilio/handle-speech">
    <Say language="de-CH">Bitte sprechen Sie Ihre Anfrage.</Say>
  </Gather>
  <Say language="de-CH">Entschuldigung, ich habe Sie nicht verstanden. Bitte rufen Sie später erneut an.</Say>
  <Hangup/>
</Response>`;

    return new NextResponse(twiml, {
      headers: { 'Content-Type': 'text/xml' },
    });
  } catch (error) {
    console.error('Error handling Twilio webhook:', error);
    const errorTwiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say language="de-CH">Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.</Say>
  <Hangup/>
</Response>`;
    return new NextResponse(errorTwiml, {
      headers: { 'Content-Type': 'text/xml' },
      status: 500,
    });
  }
}

