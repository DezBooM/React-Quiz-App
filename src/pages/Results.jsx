import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Results({ name, score }) {

  const navigate = useNavigate()

  const getText = () => {
    if(score === 0) return `Wow ${name}, your score is ${score}. At least you tried. `
      else if(score < 5) return `Your score is ${score}, not bad ${name}.`
      else if(score < 9) return `Congrats ${name}, your score is: ${score}.`
      else if(score === 10) return `Perfect score! You're a legend ${name}!`
  }
  const getTextBasedOnScore = getText()

  useEffect(() => {
    if(!name) navigate("/")
  }, [])

  return (
    <div className="h-1/2 flex justify-center items-center text-2xl md:text-7xl font-semibold text-cyan-300">
      <h1>{getTextBasedOnScore}</h1>
    </div>
  )
}

export default Results