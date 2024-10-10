import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    return (
        <nav className="bg-red-50 fixed w-full shadow-lg ">

            <div className="from-inherit text-black ">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="logo italic">
                            <div>
                                <a href="#" className="flex items-center ">

                                    <span className="font-bold font-mono text-red-600 text-6xl ">D</span>
                                    <span className="font-bold font-mono text-red-600 text-4xl">ew</span>
                                    <span className="font-bold font-mono text-gray-600 text-4xl">jan</span>
                                    <span className="font-bold font-mono text-red-600 text-6xl  pl-3">L</span>
                                    <span className="font-bold font-mono text-red-600 text-4xl">ibra</span>
                                    <span className="font-bold font-mono text-gray-600 text-4xl ">ries</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex space-x-2 items-center pl-6" >

                            <span className="flex items-center justify-center h-10 w-10 border border-gray-400 rounded-full hover:bg-red-500 hover:border-red-400 transition-colors">
                                <FontAwesomeIcon className="text-gray-800 hover:text-white" icon={faGlobe} />
                            </span>
                            <span className="flex items-center justify-center h-10 w-10 border border-gray-400 rounded-full hover:bg-red-500 hover:border-red-400 transition-colors">
                                <FontAwesomeIcon className="text-gray-800 hover:text-white" icon={faFacebookF} />
                            </span>
                            <span className="flex items-center justify-center h-10 w-10 border border-gray-400 rounded-full hover:bg-red-500 hover:border-red-400 transition-colors">
                                <FontAwesomeIcon className="text-gray-800 hover:text-white" icon={faXTwitter} />
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between  ">

                    <div className="hidden md:flex items-center space-x-6 pl-28">
                        <ul>

                            <a href="#" className="py-4 px-2  text-red-400 font-medium text-lg">Home</a>

                            <NavLink className="py-4 px-2 text-gray-600  font-medium hover:text-red-400 transition duration-300 text-lg" to='/list'>View Books</NavLink>
                            
                            <NavLink className="py-4 px-2 text-gray-600  font-medium hover:text-red-400 transition duration-300 text-lg" to='/video' >About Us</NavLink>

                            <a href="#" className="py-4 px-2 text-gray-600  font-medium hover:text-red-400 transition duration-300 text-lg">Manage Books</a>

                            <a href="#" className="py-4 px-2 text-gray-600  font-medium hover:text-red-400 transition duration-300 text-lg">Contact</a>
                           
                        </ul>

                    </div>


                    <div className="pr-10 flex space-x-2 items-center pb-2 ">

                        <Link className="p-2 bg-red-400 text-white font-bold font-serif rounded-md  hover:bg-red-500 transition duration-300" to='/form'>USER REGISTRATION/LOGIN</Link>
                    </div>
                </div>


            </div>

        </nav>
    );

}

export default Navbar