import { useNavigate } from "react-router-dom"

const QuitBtn = () => {
const navigate = useNavigate()

const quit = () => {
    const isConfirmed = confirm('Are you sure?')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('difficulty')
    if(isConfirmed) navigate('/')
}

  return (
    <button
    onClick={quit}
    className="border rounded-xl px-1 text-2xl cursor-pointer"
    >
      Quit
    </button>
  )
}

export default QuitBtn
