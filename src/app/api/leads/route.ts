import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const organizationId = searchParams.get('organizationId');
    const status = searchParams.get('status');
    const qualified = searchParams.get('qualified');
    const limit = parseInt(searchParams.get('limit') || '50');

    const where: any = {};
    if (organizationId) {
      where.organizationId = organizationId;
    }
    if (status) {
      where.status = status;
    }
    if (qualified !== null) {
      where.qualified = qualified === 'true';
    }

    const leads = await prisma.lead.findMany({
      where,
      include: {
        _count: {
          select: {
            calls: true,
            emails: true,
            tasks: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Fehler beim Laden der Leads' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      organizationId,
      email,
      phone,
      firstName,
      lastName,
      company,
      source,
    } = body;

    if (!organizationId) {
      return NextResponse.json(
        { error: 'organizationId ist erforderlich' },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        organizationId,
        email,
        phone,
        firstName,
        lastName,
        company,
        source: source || 'OTHER',
        status: 'NEW',
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json(
      { error: 'Fehler beim Erstellen des Leads' },
      { status: 500 }
    );
  }
}

