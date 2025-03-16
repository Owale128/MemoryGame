
interface IDisplayDifficulty {
    handleDifficulty: (diffi: string) => void;
}

const DisplayDifficulty = ({handleDifficulty}: IDisplayDifficulty) => {
  return (
    <div>
      <button
      className="block border border-black rounded-lg text-2xl w-2xl bg-green-500 cursor-pointer hover:bg-green-600" 
      onClick={() => handleDifficulty('Easy')}
      >
        Easy
    </button>
      <button
      className="block border border-black rounded-lg text-2xl w-2xl bg-yellow-300 my-10 cursor-pointer  hover:bg-yellow-500"  
      onClick={() => handleDifficulty('Medium')}
      >
        Medium
    </button>
      <button 
      className="block border border-black rounded-lg text-2xl w-2xl bg-red-500 cursor-pointer  hover:bg-red-600" 
      onClick={() => handleDifficulty('Hard')}
      >
        Hard
    </button>
    </div>
  )
}

export default DisplayDifficulty
