import categories from "../categories"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="px-36 pt-8 pb-2 border-b border-x-neutral-500">
           <nav className = "flex justify-between items-center"> 
           <ul className="flex max-w-sm flex-wrap items-center">
             {categories.map((category) => (
                <li key={category.name} className="mr-6 mb-4">
                    <Link to={category.path} className="font-thin text-base inline-block border-b border-transparent hover:border-current text-gray-600 hover:text-black focus: text-black">{category.name}</Link>
                </li>
             ))}
           </ul>
           <Link to="/">
                <img src="/public/brandlogo.png" className="w-58 h-16"></img>
           </Link>

           <div className ="flex items-center">
                <Link to="/search" className="mr-7 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="currentColor" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37"/></svg>
                </Link>
                <Link to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="38px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><path stroke-linejoin="round" d="M4 9h16l-.835 9.181A2 2 0 0 1 17.174 20H6.826a2 2 0 0 1-1.991-1.819z"/><path stroke-linecap="round" d="M8 11V8a4 4 0 1 1 8 0v3"/></g></svg>
                </Link>
           </div>

           </nav>
        </div>
    )
}

export default Navbar;