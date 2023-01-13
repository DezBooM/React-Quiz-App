import { Link } from "react-router-dom"

function Header() {
return (
    <div className="w-screen border-b text-center bg-gray-700 border-cyan-300 text-cyan-300 hover:text-cyan-300 p-3">
        <Link 
            className="font-caveat text-4xl md:text-8xl font-bold"
            to="/"> QUIZ APP
        </Link>
    </div>
    
  )
}

export default Header