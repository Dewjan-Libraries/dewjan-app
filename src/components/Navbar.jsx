import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";

const Navbar = () => {

    return (
        <nav className="bg-red-100 fixed w-full shadow-lg ">

            <div className="from-inherit text-black ">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="logo italic">
                            <div>
                                <a href="#" className="flex items-center ">

                                    <span className="font-bold font-mono text-red-700 text-6xl ">D</span>
                                    <span className="font-bold font-mono text-red-700 text-4xl">ew</span>
                                    <span className="font-bold font-mono text-gray-600 text-4xl">jan</span>
                                    <span className="font-bold font-mono text-red-700 text-6xl  pl-3">L</span>
                                    <span className="font-bold font-mono text-red-700 text-4xl">ibra</span>
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
                <div className="flex justify-between ">
                   
                    <div className="hidden md:flex items-center space-x-2 pl-20">
                        <a href="#" className="py-4 px-2  text-red-400 font-medium text-lg">Home</a>
                        <a href="#" className="py-4 px-2 text-gray-600 font-medium hover:text-red-400 transition duration-300 text-lg ">Viewing Books</a>
                        <a href="#" className="py-4 px-2  text-gray-600 font-medium hover:text-red-400 transition duration-300 text-lg">Borrowing Books</a>
                        <a href="#" className="py-4 px-2 text-gray-600  font-medium hover:text-red-400 transition duration-300 text-lg">Managing Books</a>
                        <a href="#" className="py-4 px-2 text-gray-600  font-medium hover:text-red-400 transition duration-300 text-lg">Contact</a>
                    </div>

                        <div className="pr-10 flex space-x-2 items-center pb-2 ">

                            <button className="p-2 bg-gray-300 text-black font-bold font-serif rounded-md  hover:bg-red-500 transition duration-300">USER REGISTRATION/LOGIN</button>
                        </div>
                    </div>

 
                </div>
            
        </nav>
    );

}

export default Navbar