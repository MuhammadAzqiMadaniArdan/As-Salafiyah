import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } },
) {
    const { id } = params
    try {
        const res = await fetch(`https://api.myquran.com/v2/doa/${id}`)
        if (!res.ok) {
            return NextResponse.json(
                { error: 'Doa not found' },
                { status: 404 },
            )
        }
        const data = await res.json()
        return NextResponse.json(data.data)
    } catch (_err: unknown) {
        const message =
            _err instanceof Error ? _err.message : 'Failed to fetch doa by id'
        return NextResponse.json({ _error: message }, { status: 500 })
    }
}
