import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Results({ name, score }) {

  const navigate = useNavigate()

  useEffect(() => {
    if(!name) navigate("/")
  }, [])

  return (
    <div className="h-1/2 flex justify-center items-center text-2xl md:text-7xl font-semibold text-cyan-300">
      <h1>Congrats {name}, your score is: {score}</h1>
    </div>
  )
}

export default Results