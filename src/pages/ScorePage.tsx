import { useLocation, useNavigate } from "react-router-dom"

const ScorePage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { attempts } = location.state || {}
  const storedUsername = sessionStorage.getItem('username')

  const retryGame = () => {
    const savedDifficulty = sessionStorage.getItem('difficulty')
    navigate('/gamePage', {state: {difficulty: savedDifficulty}})
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mt-10">Score page</h1>
      <h2 className="text-3xl mt-8">{storedUsername}</h2>
      <h2 className="text-3xl mt-8">Attempts: {attempts}</h2>
      <div className="mt-20">
      <button 
      className="border rounded-xl px-1 text-2xl cursor-pointer mr-10"
      onClick={retryGame}
      >Retry</button>
      <button className="border rounded-xl px-2.5 text-2xl cursor-pointer">Quit</button>
      </div>
    </div>
  )
}

export default ScorePage
