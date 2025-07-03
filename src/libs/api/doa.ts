import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const getAllDoa = async () => {
    const result = await axios.get(`${baseURL}/api/doa`)
    return result.data
}

export const getDoaRandom = async () => {
    const result = await axios.get(`${baseURL}/api/doa/random`)
    return result.data
}

export const getDoaById = async (id: string | undefined) => {
    if (!id) throw new Error('id is required')
    const result = await axios.get(`${baseURL}/api/doa/${id}`)
    return result.data
}
