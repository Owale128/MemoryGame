import { useContext } from "react"
import { DNA } from "react-loader-spinner"
import { ThemeContext } from "../context/ThemeContext"

const Spinner = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl" style={{color: theme.color}}>Loading..Please wait</h1>
      <DNA height={300} width={300} />
    </div>
  )
}

export default Spinner
