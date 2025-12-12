import { ISaveScoreData } from "../model/ISaveScoreData"
import { BASE_URL } from "../utils/baseUrl"
import { get, put } from "./serviceBase"

export const saveScore = async (username: string, attempts: number, difficulty: string, category: string) => {
    const url = `${BASE_URL}/saveScore`
    const data = {username, attempts, difficulty, category}
    const response = await put(url, data)
    return response.data
}

export const getScoreList = async (): Promise<ISaveScoreData[]> => {
    const url = `${BASE_URL}/scoreList`
    const response = await get<ISaveScoreData[]>(url)
    return response.data
}