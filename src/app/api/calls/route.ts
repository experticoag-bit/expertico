import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const organizationId = searchParams.get('organizationId');
    const status = searchParams.get('status');
    const direction = searchParams.get('direction');
    const limit = parseInt(searchParams.get('limit') || '50');

    const where: any = {};
    if (organizationId) {
      where.organizationId = organizationId;
    }
    if (status) {
      where.status = status;
    }
    if (direction) {
      where.direction = direction;
    }

    const calls = await prisma.call.findMany({
      where,
      include: {
        agent: {
          select: {
            id: true,
            name: true,
            type: true,
          },
        },
        lead: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return NextResponse.json(calls);
  } catch (error) {
    console.error('Error fetching calls:', error);
    return NextResponse.json(
      { error: 'Fehler beim Laden der Anrufe' },
      { status: 500 }
    );
  }
}

