import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ agentId: string }> }
) {
  try {
    const { agentId } = await params;

    // Find agent
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
    });

    if (!agent) {
      return NextResponse.json(
        { error: 'Agent nicht gefunden' },
        { status: 404 }
      );
    }

    // Toggle status
    const newStatus = agent.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';

    const updated = await prisma.agent.update({
      where: { id: agentId },
      data: { status: newStatus },
    });

    // Log activity
    await prisma.agentLog.create({
      data: {
        agentId: agent.id,
        type: 'ACTION',
        message: `Agent ${newStatus === 'ACTIVE' ? 'aktiviert' : 'deaktiviert'}`,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error toggling agent:', error);
    return NextResponse.json(
      { error: 'Fehler beim Umschalten des Agenten' },
      { status: 500 }
    );
  }
}

