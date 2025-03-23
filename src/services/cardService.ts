import { ICategory } from "../model/ICategory"
import { IGamePage } from "../model/IGamePage"
import { BASE_URL } from "../utils/baseUrl"
import { get, put } from "./serviceBase"

export const getCategories = async (): Promise<ICategory[]> => {
    const url = `${BASE_URL}/categories`
    const response = await get<ICategory[]>(url)
    return response.data
}

export const getCards = async (categoryId: number): Promise<IGamePage[]> => {
    const url = `${BASE_URL}/cards/${categoryId}`
    const response = await get<IGamePage[]>(url)
    return response.data
}

export const saveScore = async (username: string, attempts: number, difficulty: string, category: string) => {
    const url = `${BASE_URL}/saveScore`
    const data = {username, attempts, difficulty, category}
    const response = await put(url, data)
    return response.data
}