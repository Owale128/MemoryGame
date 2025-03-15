import { useLocation, useNavigate } from "react-router-dom"
import DisplayScore from "../components/DisplayScore"

const ScorePage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { attempts } = location.state || {}
  const storedUsername = sessionStorage.getItem('username')
  const savedDifficulty = sessionStorage.getItem('difficulty')

  const retryGame = () => {
    navigate('/gamePage', {state: {difficulty: savedDifficulty}})
  }

  const changeDifficulty = () => {
    navigate('/difficulty')
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mt-10">Score page</h1>
      <h2 className="text-3xl mt-8">{storedUsername}</h2>
      <h2 className="text-3xl mt-8">{savedDifficulty}</h2>
      <h2 className="text-3xl mt-8">Attempts: {attempts}</h2>

    <DisplayScore retryGame={retryGame} changeDifficulty={changeDifficulty} />
    </div>
  )
}

export default ScorePage
