import axios from 'axios'

const baseURL = 'https://api.npoint.io/99c279bb173a6e28359c'

export const getAllSurat = async () => {
    try {
        const { data } = await axios.get(`${baseURL}/data`)
        return data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        handleError(error)
    }
}

export const getSuratById = async (id?: number) => {
    if (typeof id !== 'number') return null
    try {
        const { data } = await axios.get(`${baseURL}/data/${id}`)
        return data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        handleError(error)
    }
}

export const getAyatById = async (id?: number) => {
    if (typeof id !== 'number') return null
    try {
        const { data } = await axios.get(`${baseURL}/surat/${id}`)
        return data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        handleError(error)
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(error: any): never {
    if (error.code === 'ENOTFOUND') {
        throw new Error('Periksa koneksi internet Anda.')
    }

    if (axios.isAxiosError(error)) {
        const status = error.response?.status
        if (status === 404) throw new Error('Data tidak ditemukan.')
        if (status === 401) throw new Error('Akses tidak diizinkan.')
        if (status === 500) throw new Error('Server sedang bermasalah.')
    }

    throw new Error('Gagal mengambil data.')
}
