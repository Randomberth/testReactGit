import { Link, NavLink } from "react-router-dom"

function Banner() {
    return (
        <nav className=" flex justify-between w-[100%] bg-gray-800 p-8">
            <a href="/" className="text-white font-bold text-3xl font- leading-4">Ali <span className="font-extrabold text-orange-500"> Randomberth </span></a>
            <ul className="flex font-bold justify-evenly w-[50%] text-amber-500">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div>
                <a href="/about" >A</a>
                <a href="/blog" >B</a>
                <a href="/contact" >C</a>
                <button></button>
            </div>
        </nav>
    )
}

export default Banner