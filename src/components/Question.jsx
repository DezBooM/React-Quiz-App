import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Question({ questions, currentQuestion, options, correct, setScore, setCurrentQuestion }) {

    const [selected, setSelected] = useState()
    const navigate = useNavigate()
    let style = "bg-cyan-300"

    const handleSelect = (option, style) => {
        if(selected === option && selected === correct) {
            style = "bg-lime-300"
        } else if(selected === option && selected !== correct) {
            style = "bg-red-300"
        } else if (option === correct) {
            style = "bg-lime-300"
        } else style = "bg-cyan-300"
        return style
    }

    const handleCheck = option => {
        setSelected(option)
        if(option === correct) setScore(prev => prev + 1)
    }

    const next = () => {
        if(currentQuestion > questions.length - 2) {
            navigate("/results")
        } else if (selected) {
            setCurrentQuestion(prev => prev + 1)
            setSelected()
        }
    }

  return (
    <div className="mt-4 md:mt-10 text-cyan-300 flex flex-col items-center">
        <h2 className="text-2xl">Question {currentQuestion + 1}</h2>
        <h1 className="text-2xl md:text-4xl mx-2 text-center my-5">{questions[currentQuestion].question.replaceAll("&quot;", `"`).replaceAll("&#039;", "'")}</h1>
        <div className="mt-4 flex flex-col w-11/12 md:w-4/6 md:grid md:grid-cols-2 gap-4 md:gap-10">
            {options && options.map(option => (
            <button
                className={`px-10 py-3 ${style} disabled:opacity-50  text-gray-800 rounded-lg font-semibold text-xl ${selected && handleSelect(option, style)}`} 
                key={option}
                disabled={selected}
                onClick={() => handleCheck(option)}>{option.replaceAll("&quot;", `"`).replaceAll("&#039;", "'")}
            </button>))}
        </div>
        <button 
            className="mt-10 px-12 md:px-10 py-3 md:py-1 text-3xl md:text-base bg-gray-700 font-semibold rounded-full"
            onClick={next}
            disabled={!selected}>Next
        </button>
    </div>
  )
}

export default Question