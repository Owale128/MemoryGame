
interface INotFound {
  errorTxt: string;
}

const NotFound = ({errorTxt}: INotFound) => {
  return (
    <div className="text-red-500 mb-10 text-2xl px-2 sm:text-3xl sm:px-0">
      <h1>{errorTxt}</h1>
    </div>
  )
}

export default NotFound
