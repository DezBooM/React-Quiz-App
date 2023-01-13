import { useEffect, useState } from "react"
import Question from "../components/Question"

function Quiz({ questions, score, setScore, name }) {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [options, setOptions] = useState([])

  useEffect(() => {
    if(questions.length > 0) {
      setOptions([questions[currentQuestion].correct_answer, ...questions[currentQuestion].incorrect_answers].sort(() => Math.random() - 0.5))
    } 
  }, [questions, currentQuestion])

  return (
    <div className="mt-2">
      <h1 className="text-center text-2xl md:text-3xl text-cyan-300">Welcome {name}</h1>
      <div className="flex mr-3 ml-1 mt-2 justify-between md:justify-around text-cyan-300 text-lg">
        {questions.length > 0 && <span>{questions[currentQuestion].category}</span>}
        <span>Score: {score}</span>
      </div>
      {questions.length > 0 && <Question questions={questions} options={options} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} correct={questions[currentQuestion].correct_answer} setScore={setScore} />}
    </div>
  )
}

export default Quiz