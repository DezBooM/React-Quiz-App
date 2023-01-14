import { useEffect, useState } from "react"
import quizImg from "../image/quiz.svg"

function Home({ handleChange, category, difficulty, handleName, name, handleSubmit, setQuestions, setScore }) {

  const [categories, setCategories] = useState(() => JSON.parse(localStorage.getItem("categories")) || [])
  const difficultyArray = ["Easy", "Medium", "Hard"]

  const getCategories = async () => {
    if(categories.length === 0) {
      const api = await fetch("https://opentdb.com/api_category.php")
       if (!api.ok) {
        throw new Error(`An error has occurred: ${api.status}`)
      }
      const data = await api.json()
      localStorage.setItem("categories", JSON.stringify(data.trivia_categories))
      setCategories(data.trivia_categories)
    }
  }

  useEffect(() => {
    getCategories().catch(err => console.log(err))
    setQuestions([])
    setScore(0)
  }, [])

  return (
    <div className="flex flex-col mx-2 md:mx-0 md:flex-row-reverse justify-center my-2">
      <img src={quizImg} alt="Quiz image" />
      <form className="flex flex-col items-center justify-start mt-4 md:mt-20 gap-2 md:gap-10" onSubmit={handleSubmit} >
        <input 
          className="focus:placeholder-opacity-30 border border-cyan-300 bg-gray-700 text-cyan-300 rounded-lg outline-none px-4 py-1 w-full md:w-2/3 placeholder-cyan-300 text-xl md:text-base"
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={handleName} 
          required
          autoFocus/>
        <select  
          className="border border-cyan-300 outline-none text-xl md:text-base w-full md:w-2/3 rounded-md text-cyan-300 bg-gray-700 px-3 py-1"
          name="category" 
          onChange={handleChange} 
          value={category} >
          <option value="">Any Category</option>
          {categories.map(item => {
          return (
              <option key={item.id} value={item.id}>{item.name}</option>
            )
          })}
        </select>
        <select 
          className="border border-cyan-300 outline-none text-xl md:text-base w-full md:w-2/3 rounded-md text-cyan-300 bg-gray-700 px-3 py-1"
          name="difficulty" 
          onChange={handleChange} 
          value={difficulty} 
          required>
          <option disabled value="">Select Difficulty</option>
          {difficultyArray.map(item => {
            return (
              <option key={item} value={item}>{item}</option>
            )
          })}
        </select>
        <button className="bg-cyan-300 rounded-full text-3xl md:text-base py-1 px-3 text-gray-700 w-full md:w-1/3 font-semibold">START</button>
      </form>
    </div>
  )
}

export default Home