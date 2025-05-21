import axios from 'axios'

const baseURL = 'https://api.npoint.io/99c279bb173a6e28359c'

export const getAllQuran = async () => {
    const result = await axios.get(`${baseURL}/data`)
    return result.data
}

export const getSuratById = async (id: number | undefined) => {
    const result = await axios.get(`${baseURL}/surat/${id}`)
    return result.data
}
