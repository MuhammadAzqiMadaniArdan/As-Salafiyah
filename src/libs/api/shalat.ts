import axios from "axios";

const baseURL = "https://waktu-sholat.vercel.app/prayer?";

export const  getAllShalat = async (latitude: number | undefined, longitude: number | undefined) => {
    const result = await axios.get(`${baseURL}latitude=${latitude}&longitude=${longitude}`)
    return result.data
}