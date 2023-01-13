import { useEffect, useState } from "react"

function Home({ handleChange, category, difficulty, handleName, name, handleSubmit }) {

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
  }, [])

  return (
    <div className="flex flex-row-reverse justify-center my-2">
      <img src="/quiz.svg" alt="Quiz image" />
      <form className="flex flex-col items-center justify-start mt-20 gap-10" onSubmit={handleSubmit} >
        <input 
          className="border border-cyan-300 bg-gray-700 text-cyan-300 rounded-lg outline-none px-4 py-1 w-2/3 placeholder-cyan-300" 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={handleName} 
          required/>
        <select  
          className="border border-cyan-300 outline-none w-2/3 rounded-md text-cyan-300 bg-gray-700 px-3 py-1"
          name="category" 
          onChange={handleChange} 
          value={category} 
          required>
          <option disabled value="">Select Category</option>
          {categories.map(item => {
          return (
              <option key={item.id} value={item.id}>{item.name}</option>
            )
          })}
        </select>
        <select 
          className="border border-cyan-300 outline-none w-2/3 rounded-md text-cyan-300 bg-gray-700 px-3 py-1"
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
        <button className="bg-cyan-300 rounded-full py-1 px-3 text-gray-700 w-1/3 font-semibold">START</button>
      </form>
    </div>
  )
}

export default Home