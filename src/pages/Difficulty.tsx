import { useState } from "react"

const Difficulty = () => {
  const [difficulty, setDifficulty] = useState('')

  const handleDifficulty = (diffi: string) => {
    setDifficulty(diffi)
  }
  return (
    <div>
      <h1>Choose Difficulty</h1>
      <button onClick={() => handleDifficulty('easy')}>Easy</button>
      <button onClick={() => handleDifficulty('medium')}>Medium</button>
      <button onClick={() => handleDifficulty('hard')}>Hard</button>
    </div>
  )
}

export default Difficulty
