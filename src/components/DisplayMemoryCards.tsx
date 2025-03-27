import { useContext } from "react"
import { IState } from "../model/IState"
import { motion } from "framer-motion"
import { ThemeContext } from "../context/ThemeContext"
import { BASE_URL } from "../utils/baseUrl"

interface IDisplaymemoryCards {
    state: IState
    handleCardClick: (cardId: string) => void
}

const DisplayMemoryCards = ({handleCardClick, state}: IDisplaymemoryCards) => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className="gap-4 mb-8 w-sm grid grid-cols-2 sm:grid-cols-3 sm:w-xl sm:mb-0 md:grid-cols-3 md:w-3xl md:p-4 lg:grid-cols-4 lg:w-4xl lg:p-0">
        {state.memory.length === 0 ? (
            <p className="col-span-full mt-10 ease-in duration-100" style={{color: theme.color}}>No Characters Found</p>
        ) : (
            state.memory.map((c, index) => (
                <motion.div 
                key={`${c.id} - ${index}`}
                onClick={() => handleCardClick(c.id)}
                className='w-full h-48 rounded-lg shadow-2xl flex items-center justify-center cursor-pointer bg-white'
                style={{ border: `2px solid ${theme.border}` }}
                initial={{rotateY: 0}}
                animate={{rotateY: state.flippedCards.includes(c.id) || state.matchedCards.includes(c.id) ? 180 : 0}}
                transition={{ duration: 0.5 }}
                >
                    {state.flippedCards.includes(c.id) || state.matchedCards.includes(c.id) ? (
                        <img 
                        src={`${BASE_URL}${c.imgUrl}`} 
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
        )}
</div>
  )
}

export default DisplayMemoryCards
