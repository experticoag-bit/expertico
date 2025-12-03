import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Twilio Status Callback Handler
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const callSid = formData.get('CallSid') as string;
    const callStatus = formData.get('CallStatus') as string;
    const callDuration = formData.get('CallDuration') as string;

    if (!callSid) {
      return NextResponse.json({ error: 'Missing CallSid' }, { status: 400 });
    }

    // Update call record
    const call = await prisma.call.findUnique({
      where: { twilioSid: callSid },
    });

    if (call) {
      await prisma.call.update({
        where: { id: call.id },
        data: {
          status: callStatus as any,
          duration: callDuration ? parseInt(callDuration) : null,
          endedAt: callStatus === 'completed' ? new Date() : null,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling Twilio status callback:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

