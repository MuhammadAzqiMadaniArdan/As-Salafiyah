import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { name: string } }) {
  const { name } = params;
  try {
    const res = await fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${name}`);
    if (!res.ok) {
      return NextResponse.json({ error: 'Doa not found' }, { status: 404 });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch doa by name' }, { status: 500 });
  }
}
