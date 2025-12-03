import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const organizationId = searchParams.get('organizationId');
    const status = searchParams.get('status');

    const where: any = {};
    if (organizationId) {
      where.organizationId = organizationId;
    }
    if (status) {
      where.status = status;
    }

    const agents = await prisma.agent.findMany({
      where,
      include: {
        logs: {
          take: 5,
          orderBy: { createdAt: 'desc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(agents);
  } catch (error) {
    console.error('Error fetching agents:', error);
    return NextResponse.json(
      { error: 'Fehler beim Laden der Agenten' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      type,
      name,
      description,
      organizationId,
      config,
      voiceId,
      voiceConfig,
    } = body;

    if (!type || !name || !organizationId) {
      return NextResponse.json(
        { error: 'Fehlende erforderliche Felder' },
        { status: 400 }
      );
    }

    const agent = await prisma.agent.create({
      data: {
        type,
        name,
        description,
        organizationId,
        config: config || {},
        voiceId,
        voiceConfig: voiceConfig || {},
        status: 'INACTIVE',
      },
    });

    // Log creation
    await prisma.agentLog.create({
      data: {
        agentId: agent.id,
        type: 'INFO',
        message: 'Agent erstellt',
      },
    });

    return NextResponse.json(agent, { status: 201 });
  } catch (error) {
    console.error('Error creating agent:', error);
    return NextResponse.json(
      { error: 'Fehler beim Erstellen des Agenten' },
      { status: 500 }
    );
  }
}

