import DisplayDifficulty from "../components/DisplayDifficulty"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import BackBtn from "../components/BackBtn"
import useNavigation from "../hooks/useNavigation"

const Difficulty = () => {
  const { goTo } = useNavigation()
  const theme = useContext(ThemeContext)
  const categoryId = sessionStorage.getItem('categoryId')

  const handleDifficulty = (diffi: string) => {
    sessionStorage.setItem('difficulty', diffi)
    if(categoryId) {
      goTo('/gamePage')
    }
  }

  return (
    <div className="text-center relative">
      <div className="-mt-20  absolute left-8">
    <BackBtn navigateTo='/categories' />
      </div>
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-14 ease-in duration-100 mt-20" style={{color: theme.color}}>Choose Difficulty</h1>
      <DisplayDifficulty handleDifficulty={handleDifficulty} />
    </div>
    </div>
  )
}

export default Difficulty
