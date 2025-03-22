import axios from "axios"
import { ISaveScoreData } from "../model/ISaveScoreData"

export const get = async <T> (url: string) => {
    const response = await axios.get<T>(url)
    return response
}

export const put = async <T> (url: string, data: ISaveScoreData) => {
    const response = await axios.put<T>(url, data)
    return response
}