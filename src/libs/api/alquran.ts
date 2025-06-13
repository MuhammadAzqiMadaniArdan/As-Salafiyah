import axios from 'axios'

const baseURL = 'https://api.npoint.io/99c279bb173a6e28359c'

export const getAllSurat = async () => {
    try {
        const { data } = await axios.get(`${baseURL}/data`)
        return data
    } catch {
        // console.error('Gagal mengambil data semua surat:', error)
        return null
    }
}

export const getSuratById = async (id?: number) => {
    if (typeof id !== 'number') return null

    try {
        const { data } = await axios.get(`${baseURL}/data/${id}`)
        return data
    } catch {
        // console.error(`Gagal mengambil surat dengan ID ${id}:`, error)
        return null
    }
}

export const getAyatById = async (id?: number) => {
    if (typeof id !== 'number') return null
    try {
        const { data } = await axios.get(`${baseURL}/surat/${id}`)
        return data
    } catch {
        // console.error(`Gagal mengambil ayat dengan ID ${id}:`, error)
        return null
    }
}
