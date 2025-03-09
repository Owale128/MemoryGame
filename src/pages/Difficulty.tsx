import DisplayDifficulty from "../components/DisplayDifficulty"
import { useNavigate } from "react-router-dom"

const Difficulty = () => {
  const navigate = useNavigate()

  const handleDifficulty = (diffi: string) => {
    navigate(`/gamePage?difficulty=${diffi}`)
  }

  return (
    <div className="flex flex-col items-center my-40">
      <h1 className="text-3xl mb-14">Choose Difficulty</h1>
      <DisplayDifficulty handleDifficulty={handleDifficulty} />
    </div>
  )
}

export default Difficulty
