import { IGamePage } from "../model/IGamePage"

interface IDisplaymemoryCards {
    memory: IGamePage[]
    handleCardClick: (cardId: string) => void
}

const DisplayMemoryCards = ({memory, handleCardClick}: IDisplaymemoryCards) => {
  return (
    <div className="grid grid-cols-4 gap-2">
        {memory.length === 0 ? (
            <p className="mt-10">No Characters Found</p>
        ) : (
            memory.map((c, index) =>(
                <div 
                key={`${c.id} - ${index}`}
                onClick={() => handleCardClick(c.id.toString())}
                className="cursor-pointer mx-auto"
                >
                <img 
                src={`${c.thumbnail.path}.${c.thumbnail.extension}`} 
                alt={c.name}
                className="w-72 h-72"
                />
                </div>
            ))
        )}
      
    </div>
  )
}

export default DisplayMemoryCards
