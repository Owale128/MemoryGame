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
    const theme = useContext(ThemeContext)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {state.memory.length === 0 ? (
            <p className="col-span-full mt-10 ease-in duration-100" style={{color: theme.color}}>No Characters Found</p>
        ) : (
            state.memory.map((c, index) => (
                <motion.div 
                key={`${c.id} - ${index}`}
                onClick={() => handleCardClick(c.id)}
                className='cursor-pointer mx-auto w-48 h-48 rounded-lg shadow-lg flex items-center justify-center bg-gray-300 opacity-100'
                initial={{rotateY: 0}}
                animate={{rotateY: state.flippedCards.includes(c.id) || state.matchedCards.includes(c.id) ? 180 : 0}}
                transition={{ duration: 0.5 }}
                >
                    {state.flippedCards.includes(c.id) || state.matchedCards.includes(c.id) ? (
                        <img 
                        src={`${BASE_URL}${c.imgUrl}`} 
                        alt={c.name}
                        className=" h-44 rounded-lg"
                        />
                    ) : (
                        <span className="text-white text-3xl font-bold">?</span>
                    )}
                </motion.div>
            ))
        )}
</div>
  )
}

export default DisplayMemoryCards
