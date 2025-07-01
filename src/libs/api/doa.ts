import axios from 'axios'

export const getAllDoa = async () => {
    const result = await axios.get('http://localhost:3000/api/doa')
    return result.data
}

export const getDoaRandom = async () => {
    const result = await axios.get('http://localhost:3000/api/doa/random')
    return result.data
}

export const getDoaById = async (id: string | undefined) => {
    if (!id) throw new Error('id is required')
    const result = await axios.get(`http://localhost:3000/api/doa/${id}`)
    return result.data
}
