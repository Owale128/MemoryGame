import { BASE_URL } from "../utils/baseUrl"
import { get } from "./serviceBase"

export const getCards = async (limit: number, offset: number) => {
    const url = `${BASE_URL}limit=${limit}&offset=${offset}&apikey=${import.meta.env.VITE_MARVEL_API_KEY}`
    const response = await get<{data: {results: []}}>(url)
    return response.data.results
}