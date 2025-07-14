import { NextRequest, NextResponse } from 'next/server'

type RouteContext = {
    params: {
        id: string
    }
}

export async function GET(req: NextRequest, context: RouteContext) {
    const { id } = context.params

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
    } catch (err: unknown) {
        const message =
            err instanceof Error ? err.message : 'Failed to fetch doa by id'
        return NextResponse.json({ _error: message }, { status: 500 })
    }
}
