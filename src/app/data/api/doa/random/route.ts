import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const res = await fetch('https://api.myquran.com/v2/doa/acak')
        const data = await res.json()
        return NextResponse.json(data.data)
    } catch (_err: unknown) {
        const message =
            _err instanceof Error ? _err.message : 'Failed to fetch random doa'
        return NextResponse.json({ _error: message }, { status: 500 })
    }
}
