import { useNavigate } from "react-router-dom"

interface IBackBtn {
  navigateTo: string;
}

const BackBtn = ({navigateTo}: IBackBtn) => {
const navigate = useNavigate()

const backBtn = () => {
  navigate(navigateTo)
}

  return (
    <>
      <button onClick={backBtn} 
      className="border border-black px-1 text-2xl rounded-xl bg-blue-600 text-white hover:bg-blue-800 ease-in duration-100 cursor-pointer"
      >
          Back
      </button>
    </>
  )
}

export default BackBtn
