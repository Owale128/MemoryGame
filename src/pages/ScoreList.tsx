import { Dispatch, useEffect, useState } from "react"
import { ActionType, IAction } from "../redcer/cardReducer"
import { getScoreList } from "../services/cardService"
import { ISaveScoreData } from "../model/ISaveScoreData"
import { ICategory } from "../model/ICategory"
import Spinner from "../components/Spinner"
import DisplayScoreList from "../components/DisplayScoreList"

interface IDisplayScoreList {
    dispatch: Dispatch<IAction>
}

const ScoreList = ({dispatch}:IDisplayScoreList) => {
    const [categories, setCategories] = useState<ICategory[]>([])
    const [scoreList, setScoreList] = useState<ISaveScoreData[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const storedCategories = sessionStorage.getItem('categories')
      if(storedCategories) {
        setCategories(JSON.parse(storedCategories))
      } else {
        console.error('Categories not found in sessionStorage')
      }
    }, [])

    useEffect(() => {
      const fetchScoreList = async () => {
        try {
             const data = await getScoreList()
              setScoreList(data)
        } catch (error) {
          console.error('Error fetching score list:', error)
        } finally {
          setLoading(false)
        }
      }
      fetchScoreList()
    }, [])

    const backToModal = () => {
      dispatch({type: ActionType.setShowResult, payload: true})
      dispatch({type: ActionType.setShowScoreList, payload: false})
    }

      const groupedScores = categories.map((category) =>({
          category: category.name,
          scores: scoreList.filter((score) => score.category === category.name)
      }))

        if(loading) return <Spinner />
  return (
    <div>
      <DisplayScoreList 
      backToModal={backToModal}
      groupedScores={groupedScores}
      />
    </div>
  )
}

export default ScoreList
