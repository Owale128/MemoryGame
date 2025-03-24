import useNavigation from "../hooks/useNavigation";

interface IBackBtn {
    navigateTo: string;
  }

const QuitBtn = ({navigateTo}: IBackBtn) => {
const { goTo } = useNavigation()

const quit = () => {
    const isConfirmed = confirm('Are you sure?')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('difficulty')
    sessionStorage.removeItem('categoryId')
    sessionStorage.removeItem('categoryName')
    if(isConfirmed) goTo(navigateTo)
}

  return (
    <button
    onClick={quit}
    className="border border-black rounded-xl px-2 text-3xl bg-red-700 text-white hover:bg-white ease-in duration-150 hover:text-black cursor-pointer"
  >
      Quit 
    </button>
  )
}

export default QuitBtn