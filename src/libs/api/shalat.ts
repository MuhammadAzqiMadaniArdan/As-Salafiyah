import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const getAllShalat = async (
    city: number | undefined,
    date: string | undefined,
) => {
    const result = await axios.get(
        `${baseURL}/api/sholat?city=${city}&date=${date}`,
    )
    return result.data.data.jadwal || null
}
