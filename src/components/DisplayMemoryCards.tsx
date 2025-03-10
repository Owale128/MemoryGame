import { IGamePage } from "../model/IGamePage"

interface IDisplaymemoryCards {
    memory: IGamePage[]
    handleCardClick: (cardId: string) => void
}

const DisplayMemoryCards = ({memory, handleCardClick}: IDisplaymemoryCards) => {
  return (
    <div>
        {memory.length === 0 ? (
            <p className="mt-10">No Characters Found</p>
        ) : (
            memory.map((c) =>(
                <div 
                key={c.id}
                onClick={() => handleCardClick(c.id.toString())}
                className="cursor-pointer"
                >
                <h2>{c.name}</h2>
                <img 
                src={`${c.thumbnail.path}.${c.thumbnail.extension}`} 
                alt={c.name}
                className="w-72"
                />
                </div>
            ))
        )}
      
    </div>
  )
}

export default DisplayMemoryCards
