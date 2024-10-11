import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "animate.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen hero ">
        <div className="flex justify-center flex-col items-center pt-96 bg-gradient-to-r text-6xl text-white font-bold animist">
          <div className="bg-[rgba(26,24,24,0.6)] ">
          Discover Your Next Great Read
          <p>Share, and Connect with Literature</p>
          </div>
        
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;

// <div className="hero">
//   <div className="text-5xl text-white ">
//     <FontAwesomeIcon icon={faBookOpenReader} />
//   </div>
//   <div className="text-5xl pt-96 pb-10 text-white ml-7 ">
//     <h1>Library Management App</h1>
//   </div>
//   <div className="flex  justify-between text-white border solid text-2xl border-orange-400 border-l-orange-400 rounded-lg items-center w-[95vw] ml-6">
//     <div className=" flex  w-[70%] h-[20vh] bg-orange-300 pl-10 rounded-lg hover:bg-red-500">
//       <button type="submit"> Search</button>
//       <input
//         className="w-[60vw] bg-orange-300 hover:bg-red-500  "
//         type="text"
//         placeholder="       ............."
//       />
//     </div>
//     {/* <div className="flex justify-center flex-col items-center w-[35%] h-[20vh]  bg-slate-500 text-2xl rounded-r-lg  hover:bg-red-500 hover:border-red-400">
//       <h3>Search by <span className="pl-5"><FontAwesomeIcon icon={faCaretDown} /></span>
//       </h3>

//     </div> */}
//     <div>
//       <h2>Select Collection</h2>
//       <select>
//         <option value="my-books">my books</option>
//         {/* Add more options as needed */}
//       </select>
//     </div>
//   </div>
// </div>
