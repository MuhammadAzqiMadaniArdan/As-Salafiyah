import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/v1/random');
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch random doa' }, { status: 500 });
  }
}
