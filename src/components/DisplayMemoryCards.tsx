import { IGamePage } from "../model/IGamePage"

interface IDisplaymemoryCards {
    memory: IGamePage[]
}

const DisplayMemoryCards = ({memory}: IDisplaymemoryCards) => {
  return (
    <div>
        {memory.length === 0 ? (
            <p>No Characters Found</p>
        ) : (
            memory.map((c) =>(
                <div key={c.id}>
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
