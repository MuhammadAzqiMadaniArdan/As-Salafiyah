import axios from 'axios'

const baseURL = 'http://localhost:3000'

export const getAllShalat = async (
    city: number | undefined,
    date: string | undefined,
) => {
    const result = await axios.get(
        `${baseURL}/data/api/sholat?city=${city}&date=${date}`,
    )
    return result.data.data.jadwal || null
}
