import useNavigation from "../hooks/useNavigation";

interface IBackBtn {
  navigateTo: string;
}

const BackBtn = ({navigateTo}: IBackBtn) => {
const { goTo } = useNavigation()

const backBtn = () => {
  goTo(navigateTo)
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
