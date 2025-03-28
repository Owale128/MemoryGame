import { motion } from "framer-motion"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { ISaveScoreData } from "../model/ISaveScoreData";


interface IDisplayScoreList {
   backToModal: () => void;
   groupedScores: {
    category: string;
    scores: ISaveScoreData[]
   }[]
}

const DisplayScoreList = ({backToModal, groupedScores}: IDisplayScoreList) => {
  const { theme } = useContext(ThemeContext)
  const currentUser = sessionStorage.getItem('username')

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
      <div className="min-h-200 w-screen p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:min-h-160 lg:p-14">
      {groupedScores.map((group, index) => (
        <div
        className="rounded-2xl m-2 p-4 bg-gray-400 cursor-pointer"
        key={index}
        style={{border: `1px solid ${theme.border}`}}
        >
          <ul>
          <h2 className="underline w-full mb-4 sm:mb-6 text-black">{group.category}</h2>
          {group.scores.map((score, idx) => (
            <li key={idx} style={{color: score.username === currentUser ? 'darkgreen' : 'black'}} className=" md:mb-4">
              <span className="text-lg sm:text-xl md:text-2xl">{score.username} <br/> Attempts: {score.attempts} <br/> Score: {score.difficulty}</span>
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
