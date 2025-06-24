import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api');
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch doa list' }, { status: 500 });
  }
}
