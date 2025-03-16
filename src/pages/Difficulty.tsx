import DisplayDifficulty from "../components/DisplayDifficulty"
import { useNavigate } from "react-router-dom"
import QuitBtn from "../components/QuitBtn"

const Difficulty = () => {
  const navigate = useNavigate()

  const handleDifficulty = (diffi: string) => {
    sessionStorage.setItem('difficulty', diffi)
    navigate('/gamePage')

  }

  return (
    <div className="text-center">
    <QuitBtn />
    <div className="flex flex-col items-center my-44">
      <h1 className="text-3xl mb-14">Choose Difficulty</h1>
      <DisplayDifficulty handleDifficulty={handleDifficulty} />
    </div>
    </div>
  )
}

export default Difficulty
