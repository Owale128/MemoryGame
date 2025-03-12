import { useLocation } from "react-router-dom"

const ScorePage = () => {
  const location = useLocation()
  const { attempts } = location.state || {}
  const storedUsername = sessionStorage.getItem('username')
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mt-10">Score page</h1>
      <h2 className="text-3xl mt-8">{storedUsername}</h2>
      <h2 className="text-3xl mt-8">Attempts: {attempts}</h2>
    </div>
  )
}

export default ScorePage
