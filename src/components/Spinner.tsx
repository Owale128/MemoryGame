import { Rings } from "react-loader-spinner"
const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl">Loading..Please wait</h1>
      <Rings color='#3498db' height={350} width={350} />
    </div>
  )
}

export default Spinner
