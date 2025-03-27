import { Dispatch, useContext, useEffect, useState } from "react"
import { ActionType, IAction } from "../redcer/cardReducer"
import { ThemeContext } from "../context/ThemeContext"
import { motion } from "framer-motion"
import Spinner from "./Spinner"
import { getScoreList } from "../services/cardService"
import { ISaveScoreData } from "../model/ISaveScoreData"
import { ICategory } from "../model/ICategory"

interface IDisplayScoreList {
    dispatch: Dispatch<IAction>
}

const DisplayScoreList = ({dispatch}: IDisplayScoreList) => {
    const { theme } = useContext(ThemeContext)
    const [categories, setCategories] = useState<ICategory[]>([])
    const [scoreList, setScoreList] = useState<ISaveScoreData[]>([])
    const [loading, setLoading] = useState(true)

    const currentUser = sessionStorage.getItem('username')

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
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      >
      <div className="absolute left-8 top-8 lg:left-12 lg:top-10">
        <button onClick={backToModal} 
        className="px-1 text-2xl rounded-xl bg-blue-600 text-white hover:bg-white hover:text-black ease-in duration-100 cursor-pointer" 
        style={{border: `1px solid ${theme.border}`}}>
          Back
        </button>
      </div>
      <motion.div
      className="modal-content"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.8 }}
      >
      <h1 className="text-center mt-20 text-3xl md:text-4xl lg:mt-10 ease-in duration-100" style={{color: theme.color}}>Score List</h1>
      <div className="min-h-200 w-screen p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:min-h-160 lg:p-10">
      {groupedScores.map((group, index) => (
        <div
        className="rounded-2xl m-2 p-4 bg-gray-400 cursor-pointer"
        key={index}
        style={{border: `1px solid ${theme.border}`}}
        >
          <ul>
          <h2 className="underline w-full mb-4 sm:mb-6 text-black">{group.category}</h2>
          {group.scores.map((score, idx) => (
            <li key={idx} style={{color: score.username === currentUser ? 'darkgreen' : 'black'}} className="mb-2 md:mb-4">
              <span className="text-lg sm:text-xl md:text-2xl">{score.username} - {score.attempts} - {score.difficulty}</span>
              <hr className="text-white" />
            </li>
          ))}
          </ul>
        </div>
      ))}
      </div>
  </motion.div>
  </motion.div>
  )
}

export default DisplayScoreList
