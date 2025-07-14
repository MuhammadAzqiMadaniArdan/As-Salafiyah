import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const city = searchParams.get('city')
    const date = searchParams.get('date')

    if (!city || !date) {
        return NextResponse.json(
            { error: 'City and date are required' },
            { status: 400 },
        )
    }

    try {
        const res = await fetch(
            `https://api.myquran.com/v2/sholat/jadwal/${city}/${date}`,
        )
        const data = await res.json()
        return NextResponse.json(data)
    } catch (_err: unknown) {
        const message =
            _err instanceof Error ? _err.message : 'Failed to fetch sholat data'
        return NextResponse.json({ _error: message }, { status: 500 })
    }
}
