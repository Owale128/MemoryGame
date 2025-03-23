import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import useNavigation from "../hooks/useNavigation";

interface IBackBtn {
    navigateTo: string;
  }

const QuitBtn = ({navigateTo}: IBackBtn) => {
const { goTo } = useNavigation()
const theme = useContext(ThemeContext)

const quit = () => {
    const isConfirmed = confirm('Are you sure?')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('difficulty')
    if(isConfirmed) goTo(navigateTo)
}

  return (
    <button
    onClick={quit}
    className="border rounded-xl px-2 text-2xl hover:bg-white ease-in duration-150 hover:text-black cursor-pointer"
    style={{backgroundColor: theme.background, color: theme.color}}>
      Quit 
    </button>
  )
}

export default QuitBtn