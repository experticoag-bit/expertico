import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const organizationId = searchParams.get('organizationId');
    const status = searchParams.get('status');
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '50');

    const where: any = {};
    if (organizationId) {
      where.organizationId = organizationId;
    }
    if (status) {
      where.status = status;
    }
    if (category) {
      where.category = category;
    }

    const emails = await prisma.email.findMany({
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
      orderBy: { receivedAt: 'desc' },
      take: limit,
    });

    return NextResponse.json(emails);
  } catch (error) {
    console.error('Error fetching emails:', error);
    return NextResponse.json(
      { error: 'Fehler beim Laden der E-Mails' },
      { status: 500 }
    );
  }
}

