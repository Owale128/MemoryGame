import { useContext } from "react"
import { IState } from "../model/IState"
import { motion } from "framer-motion"
import { ThemeContext } from "../context/ThemeContext"
import { useLocation } from "react-router-dom"

interface IDisplaymemoryCards {
    state: IState
    handleCardClick: (cardId: string) => void
}

const DisplayMemoryCards = ({handleCardClick, state}: IDisplaymemoryCards) => {
    const location = useLocation()
    const {theme} = useContext(ThemeContext)
  return (
        <motion.main
        key={location.key}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.6 }}
        className="gap-4 mb-8 w-sm p-6 grid grid-cols-2 sm:grid-cols-3 sm:w-xl sm:mb-0 md:grid-cols-3 md:w-2xl md:p-4 lg:grid-cols-4 lg:p-4 landscape:w-3xl"
        >

        {state.memory.map((c, index) => (
            <motion.div 
            key={`${c.id} - ${index}`}
            onClick={() => handleCardClick(c.id)}
            className='w-full h-48 rounded-lg shadow-2xl flex items-center justify-center cursor-pointer bg-white'
            style={{ border: `2px solid ${theme.border}` }}
            initial={{rotateY: 0}}
            animate={{rotateY: state.flippedCards.includes(c.id) || state.matchedCards.includes(c.id) ? 180 : 0}}
            transition={{ duration: 0.4 }}
            role="button"
            tabIndex={0}
            aria-label={`Card with ${c.name} - Click to flip`}
            >
                    {state.flippedCards.includes(c.id) || state.matchedCards.includes(c.id) ? (
                        <img 
                        src={`${c.imgUrl}`} 
                        alt={c.name}
                        className=" h-44"
                        />
                    ) : (
                        <div className=" flex items-center justify-center w-full h-full rounded-md bg-gray-400 opacity-100">
                        <span className="text-white text-3xl font-bold">?</span>
                        </div>
                    )}
                </motion.div>
            ))
        }
        </motion.main>
  )
}

export default DisplayMemoryCards
