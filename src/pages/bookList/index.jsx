import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Booklist = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get ("https://dewjan-api-1.onrender.com/")
      setBooks (response.data)

    }
    getBooks();
    
   }, []);

   return (

    <div>
      <div>
        {books.map((book) => (
          <div key={book._id}>
          
            <h1 className="text-2xl font-bold">{book.title}</h1>
//                 <p className="text-[#0e0c0c] font-bold">Author: {book.author}</p>
//                 <p className="text-[#0b0c0c} font-bold ">PublishingDate: {book.publishDate}</p>
//                 <p className="text-[#0b0c0c] font-bold">Decriptions: {book.summary}</p>
//                 <p className="text-[#0b0c0c] font-bold">Genre: {book.genre}</p>
//                 <p className="text-[#0b0c0c] font-bold">Pdf: {book.pdf}</p>
          </div>
        ) )}
      </div>
    </div>
   )
}
//   return (
//     <div className="bg-[url('C:\Users\debam\Desktop\react_project_theo\dewjan-app\src\assets\images\image8.png')]">
//       <div className="flex justify-around pt-10 items-center ">
//         <form className=" shadow-inner items-center flex justify-between border bg-red-600 pr-20 hover:bg-gradient-to-r from-[#cc2828] via-[#dee0ee] to-pink-600 rounded-lg text-2xl" action="">
//           <input  className=" items-center pl-10 focus:outline-none shadow-inner h-14 w-[60vw]" type="text" placeholder="search here ....."/>
//           <button className="pl-20 text-white " type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} />
//           </button>
//         </form>
//         <div className="bg-gradient-to-r from-[#c78b8b] via-[#c2c3cf] to-pink-600 shadow-inner items-center  flex border h-14 w-[18vw]  px-7 rounded-lg ">
//           <Link to="/books/:id">
//             <button className="">View Single Book</button>
//           </Link>
//           </div>
//       </div>
//       <div>
//   key={index}
//   <img 
//   src={book.image} 
//   alt="image" />
//   <h1 className="text-2xl font-bold">{book.title}</h1>
//                 <p className="text-[#0e0c0c] font-bold">Author: {book.author}</p>
//                 <p className="text-[#0b0c0c} font-bold ">PublishingDate: {book.publishDate}</p>
//                 <p className="text-[#0b0c0c] font-bold">Decriptions: {book.summary}</p>
//                 <p className="text-[#0b0c0c] font-bold">Genre: {book.genre}</p>
//                 <p className="text-[#0b0c0c] font-bold">Pdf: {book.pdf}</p>
// </div>
//       <div className="flex">
//         <div className="flex pt-40 flex-col  pl-5 items-start gap-1">
//           <Link to="/">
//             <button
//               type="submit"
//               className="text-3xl text-white bg-[#070c47] border-solid py-1 px-2.5 hover:bg-gradient-to-r from-[#ac2626] via-[#f11cbc] to-red-400"
//             >
//               <FontAwesomeIcon icon={faHome} />
//             </button>
//           </Link>
//           <Link to="/">
//           <button
//             className="text-3xl text-white  bg-[#070c47] border-solid py-1 px-3 hover:bg-gradient-to-r from-[#ac2626] via-[#f11cbc] to-red-400"
//             type="submit"
//           >
//             <FontAwesomeIcon icon={faPenToSquare} />
//           </button>
//           </Link>
//           <Link to="/add-new">
//           <button
//             className="text-3xl text-white  bg-[#070c47] border-solid py-1 px-3 hover:bg-gradient-to-r from-[#ac2626] via-[#f11cbc] to-red-400"
//             types="submit"
//           >
//             <FontAwesomeIcon icon={faPlus} />
//           </button>
//           </Link>
          
//         </div>
      
//         <div className="mx-auto h-[100vh]">
//           <div className="flex justify-center space-x-4 mb-4 pt-16">
//             {books.map((book, index) => {


          

//           )
//             })
//           }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Booklist;
