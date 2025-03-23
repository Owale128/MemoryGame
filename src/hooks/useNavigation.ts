import { useNavigate } from "react-router-dom"

const useNavigation = () => {
  const navigate = useNavigate()

  const goTo = (path: string, state?: object) => {
    navigate(path, {state})
  }
  return { goTo }
}

export default useNavigation
