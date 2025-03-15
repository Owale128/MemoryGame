import { useLocation, useNavigate } from "react-router-dom"
import DisplayScore from "../components/DisplayScore"
import { useEffect } from "react"
import axios from "axios"

const ScorePage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { attempts } = location.state || {}
  const storedUsername = sessionStorage.getItem('username') || 'unKnown'
  const savedDifficulty = sessionStorage.getItem('difficulty') || 'medium'

  useEffect(() => {
    const sendScoreToBackend = async (username: string, attempts: number, difficulty: string) => {
        try {
            await axios.post('http://localhost:3000/saveScore', {username, attempts, difficulty})
            console.log('Score sent to backend successfully')
        } catch (error) {
            console.error('Error sending score to backend')
        }
    }
    sendScoreToBackend(storedUsername, attempts, savedDifficulty)
  }, [])

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
