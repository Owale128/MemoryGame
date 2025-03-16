
interface IDisplayDifficulty {
    handleDifficulty: (diffi: string) => void;
}

const DisplayDifficulty = ({handleDifficulty}: IDisplayDifficulty) => {
  return (
    <div>
      <button
      className="block border border-black rounded-lg text-3xl w-2xl p-4 bg-green-500 ease-in duration-100 hover:bg-green-600 cursor-pointer" 
      onClick={() => handleDifficulty('Easy')}
      >
        Easy
    </button>
      <button
      className="block border border-black rounded-lg text-3xl w-2xl p-4 bg-yellow-300 my-10 ease-in duration-100 hover:bg-yellow-500 cursor-pointer"  
      onClick={() => handleDifficulty('Medium')}
      >
        Medium
    </button>
      <button 
      className="block border border-black rounded-lg text-3xl w-2xl p-4 bg-red-500 ease-in duration-100 hover:bg-red-600 cursor-pointer" 
      onClick={() => handleDifficulty('Hard')}
      >
        Hard
    </button>
    </div>
  )
}

export default DisplayDifficulty
