import { useEffect, useState } from "react"
import { getScoreList } from "../services/cardService"
import { ISaveScoreData } from "../model/ISaveScoreData"
import { ICategory } from "../model/ICategory"
import Spinner from "../components/Spinner"
import DisplayScoreList from "../components/DisplayScoreList"
import NotFound from "../components/NotFound"
import BackBtn from "../components/BackBtn"
import useNavigation from "../hooks/useNavigation"

const ScoreList = () => {
    const [categories, setCategories] = useState<ICategory[]>([])
    const [scoreList, setScoreList] = useState<ISaveScoreData[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const { goTo } = useNavigation()

    useEffect(() => {
      const storedCategories = sessionStorage.getItem('categories')
      if(storedCategories) {
        setCategories(JSON.parse(storedCategories))
      } else {
        setError('Categories not found in sessionStorage')
      }
    }, [])

    useEffect(() => {
      const fetchScoreList = async () => {
        try {
             const data = await getScoreList()
              setScoreList(data)
        } catch {
          setError('An error occurred while fetching score list')
        } finally {
          setLoading(false)
        }
      }
      fetchScoreList()
    }, [])

    const backToResults = () => {
      goTo('/result')
    }

    const groupedScores = categories.map((category) =>({
        category: category.name,
        scores: scoreList.filter((score) => score.category === category.name).slice(0, 5)
    }))

      if(loading) return <Spinner />
      if(error) {
          return(
          <>
              <NotFound errorTxt={error}/>
              <BackBtn navigateTo="/" aria-label="Back to previous screen" />
          </>
        )
      }
        
  return (
    <div>
      <DisplayScoreList 
      backToResults={backToResults}
      groupedScores={groupedScores}
      aria-live="polite"
      />
    </div>
  )
}

export default ScoreList
