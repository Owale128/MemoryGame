import { useContext } from "react";
import useNavigation from "../hooks/useNavigation";
import { ThemeContext } from "../context/ThemeContext";

interface IBackBtn {
    navigateTo: string;
  }

const QuitBtn = ({navigateTo}: IBackBtn) => {
const { goTo } = useNavigation()
const {theme} = useContext(ThemeContext)

const quit = () => {
    const isConfirmed = confirm('Are you sure?')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('difficulty')
    sessionStorage.removeItem('categories')
    sessionStorage.removeItem('categoryId')
    sessionStorage.removeItem('categoryName')
    if(isConfirmed) goTo(navigateTo)
}

  return (
    <button
    onClick={quit}
    className="text-2xl rounded-xl px-2 bg-red-700 text-white hover:bg-white hover:text-black ease-in duration-150 cursor-pointer"
    style={{border: `1px solid ${theme.border}`}}
  >
      Quit 
    </button>
  )
}

export default QuitBtn