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
        className="gap-1 mb-8 w-screen p-2 grid grid-cols-4 md:w-3xl md:gap-4 landscape:w-3xl"
        >

        {state.memory.map((c, index) => (
            <motion.div 
            key={`${c.id} - ${index}`}
            onClick={() => handleCardClick(c.id)}
            className='w-full h-28 rounded-lg shadow-2xl flex items-center justify-center cursor-pointer bg-white sm:h-40'
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
                        className=" h-26 sm:h-36"
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
