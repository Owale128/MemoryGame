import useNavigation from "../hooks/useNavigation";
import DisplayResults from "../components/DisplayResults";


const Results = () => {
    const { goTo } = useNavigation()

    const changeDifficulty = () => {
        goTo('/difficulty')
      }

    const changeCategory = () => {
        goTo('/categories')
      }

    const showScoreList = () => {
      goTo('/scoreList')
      }

      const retryGame = () => {
        goTo('/gamePage')
      }
      
  return (
    <div aria-live="assertive" aria-atomic="true">

    <DisplayResults 
     retryGame={retryGame}
     changeDifficulty={changeDifficulty}
     changeCategory={changeCategory}
     showScoreList={showScoreList}
     />
      
    </div>
  )
}

export default Results
