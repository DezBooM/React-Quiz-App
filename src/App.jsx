import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Results from "./pages/Results"


function App() {

  const [searchParams, setSearchParams] = useState({category:"", difficulty:""})
  const [name, setName] = useState("")
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)
  const navigate = useNavigate()
  
  const handleName = e => setName(e.target.value)
  
  const getQuestions = async () => {
    const api = await fetch(`https://opentdb.com/api.php?amount=10&category=${searchParams.category}&difficulty=${searchParams.difficulty.toLowerCase()}&type=multiple`)
    if(!api.ok) {
      throw new Error(`An error has occurred: ${api.status}`)
    }
    const data = await api.json()
    setQuestions(data.results)
  }

  const handleChange = e => {
    const {name, value} = e.target
    setSearchParams(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    getQuestions()
    navigate("/quiz")    
  }

  useEffect(() => {
    setScore(0)
  }, [name])

  return (
    <div className="h-screen md:h-full lg:h-screen box-border font-quicksand bg-gray-800 bg-fixed">
      <Header />
      <Routes>
        <Route path="/" element={<Home handleChange={handleChange} {...searchParams} handleName={handleName} {...name} handleSubmit={handleSubmit} /> } />
        <Route path="/quiz" element={<Quiz questions={questions} score={score} setScore={setScore} name={name} />} />
        <Route path="/results" element={<Results name={name} score={score} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
