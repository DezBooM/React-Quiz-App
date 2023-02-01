import { useEffect, useState } from "react"
import { HourGlass } from "react-awesome-spinners"
import { useNavigate } from "react-router-dom"
import Question from "../components/Question"

function Quiz({ questions, score, setScore, name, setQuestions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (questions.length > 0) {
      setOptions(
        [
          questions[currentQuestion].correct_answer,
          ...questions[currentQuestion].incorrect_answers,
        ].sort(() => Math.random() - 0.5)
      )
      setLoading(false)
    }
  }, [questions, currentQuestion])

  useEffect(() => {
    if (!name) navigate("/")
  }, [])

  return !loading ? (
    <div className="mt-2">
      <h1 className="text-center text-2xl md:text-3xl text-cyan-300">
        Welcome {name}
      </h1>
      <div className="flex mr-3 ml-1 mt-2 justify-between md:justify-around text-cyan-300 text-lg">
        <span>{questions[currentQuestion].category}</span>
        <span>Score: {score}</span>
      </div>
      <Question
        questions={questions}
        setQuestions={setQuestions}
        options={options}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        correct={questions[currentQuestion].correct_answer}
        setScore={setScore}
      />
    </div>
  ) : (
    <div className="flex justify-center items-center h-1/2">
      <HourGlass color="#4DD0E1" />
    </div>
  )
}

export default Quiz
