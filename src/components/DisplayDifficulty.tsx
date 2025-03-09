
interface IDisplayDifficulty {
    handleDifficulty: (diffi: string) => void;
}

const DisplayDifficulty = ({handleDifficulty}: IDisplayDifficulty) => {
  return (
    <div>
      <button
      className="block border border-black rounded-lg text-2xl w-2xl cursor-pointer hover:bg-gray-200" 
      onClick={() => handleDifficulty('Easy')}
      >
        Easy
    </button>
      <button
      className="block border border-black rounded-lg text-2xl w-2xl my-10 cursor-pointer  hover:bg-gray-200"  
      onClick={() => handleDifficulty('Medium')}
      >
        Medium
    </button>
      <button 
      className="block border border-black rounded-lg text-2xl w-2xl cursor-pointer  hover:bg-gray-200" 
      onClick={() => handleDifficulty('Hard')}
      >
        Hard
    </button>
    </div>
  )
}

export default DisplayDifficulty
