import { Dispatch, useContext } from "react"
import { ActionType, IAction } from "../redcer/cardReducer"
import { ThemeContext } from "../context/ThemeContext"
import { motion } from "framer-motion"

interface IDisplayScoreList {
    dispatch: Dispatch<IAction>
}

const DisplayScoreList = ({dispatch}: IDisplayScoreList) => {
    const { theme } = useContext(ThemeContext)

    const backToModal = () => {
      dispatch({type: ActionType.setShowResult, payload: true})
      dispatch({type: ActionType.setShowScoreList, payload: false})
    }

  return (
    <motion.div
      className="modal-overlay w-full p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      >
      <div className="absolute left-8 top-8 lg:left-12 lg:top-12">
        <button onClick={backToModal} className="cursor-pointer" style={{color: theme.color}}>Back</button>
      </div>
      <motion.div
      className="modal-content flex flex-col justify-center items-center text-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
      >
    
      <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-center text-3xl md:text-4xl mb-10 ease-in duration-100" style={{color: theme.color}}>Score List</h1>
    
  </div>
  </motion.div>
  </motion.div>
  )
}

export default DisplayScoreList
