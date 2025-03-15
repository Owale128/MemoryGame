import QuitBtn from "./QuitBtn";

interface IDisplayScore {
    retryGame: () => void;
    changeDifficulty: () => void;
}

const DisplayScore = ({retryGame, changeDifficulty}: IDisplayScore) => {
  return (
    <div>
         <div className="mt-20">
      <button 
      className="border rounded-xl px-1 text-2xl cursor-pointer"
      onClick={retryGame}
      >
        Retry
      </button>

      <button 
      className="border rounded-xl px-1 text-2xl cursor-pointer mx-10"
      onClick={changeDifficulty}
      >
        Change difficulty
      </button>

      <QuitBtn />
      </div>
    </div>
  )
}

export default DisplayScore
