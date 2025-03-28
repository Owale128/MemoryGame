import DisplayDifficulty from "../components/DisplayDifficulty"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import BackBtn from "../components/BackBtn"
import useNavigation from "../hooks/useNavigation"

const Difficulty = () => {
  const { goTo } = useNavigation()
  const {theme} = useContext(ThemeContext)
  const categoryId = sessionStorage.getItem('categoryId')

  const handleDifficulty = (diffi: string) => {
    sessionStorage.setItem('difficulty', diffi)
    if(categoryId) {
      goTo('/gamePage')
    }
  }

  return (
    <div className="text-center">
      <div className="absolute left-10 top-8 sm:left-12 sm:top-12">
    <BackBtn navigateTo='/categories' />
      </div>
    <div className="w-screen font-mono landscape:my-22">
      <h1 className="text-3xl mb-4 ease-in duration-100 " style={{color: theme.color}}>Choose Difficulty</h1>
      <DisplayDifficulty handleDifficulty={handleDifficulty} />
    </div>
    </div>
  )
}

export default Difficulty
