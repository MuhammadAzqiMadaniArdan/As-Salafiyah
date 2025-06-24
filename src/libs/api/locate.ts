import axios from "axios";

const baseURL = "https://waktu-sholat.vercel.app/province";

export const getAllProvince = async () => {
    const result = await axios.get(`${baseURL}`)
    return result.data
}

export const getProvinceById = async (id: string | undefined) => {
    const result = await axios.get(`${baseURL}/${id}`)
    return result.data
}

export const getAllCityByProv = async (province_id: string | undefined) => {
    const result = await axios.get(`${baseURL}/${province_id}/city`)
    return result.data
}

export const getCityById = async (province_id: string | undefined, city_id: string | undefined) => {
    const result = await axios.get(`${baseURL}/${province_id}/city/${city_id}`)
    return result.data
}