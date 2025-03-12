import { get } from "./serviceBase"

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`

export const getCards = async (limit: number, offset: number) => {
    const url = `${BASE_URL}limit=${limit}&offset=${offset}&apikey=${import.meta.env.VITE_MARVEL_API_KEY}`
    const response = await get<{data: {results: []}}>(url)
    return response.data.results
}