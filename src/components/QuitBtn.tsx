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
    className="border rounded-xl px-2 text-3xl text-white mt-10 bg-black hover:bg-white ease-in duration-150 hover:text-black cursor-pointer"
    >
      Quit
    </button>
  )
}

export default QuitBtn
