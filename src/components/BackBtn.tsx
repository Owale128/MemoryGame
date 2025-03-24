import { useContext } from "react";
import useNavigation from "../hooks/useNavigation";
import { ThemeContext } from "../context/ThemeContext";

interface IBackBtn {
  navigateTo: string;
}

const BackBtn = ({navigateTo}: IBackBtn) => {
const { goTo } = useNavigation()
const theme = useContext(ThemeContext)

const backBtn = () => {
  goTo(navigateTo)
}

  return (
    <>
      <button onClick={backBtn} 
      className="px-1 text-2xl rounded-xl bg-blue-600 text-white hover:bg-blue-800 ease-in duration-100 cursor-pointer"
      style={{border: `1px solid ${theme.border}`}}
      >
          Back
      </button>
    </>
  )
}

export default BackBtn
