import axios from 'axios'

export const getAllShalat = async (
    city: number | undefined,
    date: string | undefined,
) => {
    const result = await axios.get(
        `http://localhost:3000/api/sholat?city=${city}&date=${date}`,
    )
    return result.data.data.jadwal || null
}
