import DisplayDifficulty from "../components/DisplayDifficulty"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import BackBtn from "../components/BackBtn"

const Difficulty = () => {
  const navigate = useNavigate()
  const theme = useContext(ThemeContext)
  const categoryId = sessionStorage.getItem('category')

  const handleDifficulty = (diffi: string) => {
    sessionStorage.setItem('difficulty', diffi)
    if(categoryId) {
      navigate('/gamePage')
    }
  }

  return (
    <div className="text-center">
      <div className="-mt-16 mb-32">
    <BackBtn navigateTo='/categories' />
      </div>
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-14 ease-in duration-100" style={{color: theme.color}}>Choose Difficulty</h1>
      <DisplayDifficulty handleDifficulty={handleDifficulty} />
    </div>
    </div>
  )
}

export default Difficulty
