import { IState } from "../model/IState"
import { motion } from "framer-motion"

interface IDisplaymemoryCards {
    state: IState
    handleCardClick: (cardId: string) => void
}

const DisplayMemoryCards = ({handleCardClick, state}: IDisplaymemoryCards) => {
  return (
    <div className="grid grid-cols-4 gap-2">
        {state.memory.length === 0 ? (
            <p className="mt-10">No Characters Found</p>
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
                            src={`${c.thumbnail.path}.${c.thumbnail.extension}`} 
                            alt={c.name}
                            className="w-full h-full object-cover rounded-lg"
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
