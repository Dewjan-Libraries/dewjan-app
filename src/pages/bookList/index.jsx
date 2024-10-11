import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../constants";

const Booklist = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get(`${BASE_URL}/books`);
      setBooks(response.data);
    };

    getBooks();
  }, []);
  

  return (
    <div className="flex flex-col justify-center items-center h-full w-full bg-rose-10 bg-[url('C:\Users\debam\Desktop\react_project_theo\dewjan-app\src\assets\images\image8.png')]">

      <div>
      </div>
      <div className="flex justify-around pt-10 items-center ">
        <form
          className=" shadow-inner items-center flex justify-between border bg-[#DA2626] pr-20 hover:bg-gradient-to-r from-[#cc2828] via-[#dee0ee] to-pink-600 rounded-lg text-2xl mr-6"
          action=""
        >
          <input
            className=" items-center pl-10 focus:outline-none shadow-inner h-14 w-[60vw]"
            type="text"
            placeholder="search here ....."
          />
          <button className="pl-20 text-white " type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="bg-gradient-to-r from-[#c78b8b] via-[#dfe0e6] to-[#e45858] shadow-inner items-center  flex border h-14 w-[18vw]  px-7 text-2xl rounded-lg ">
          <Link to="/books/:id">
            <button className="">View Single Book</button>
          </Link>
        </div>
      </div>
      <div className="mr-[1250px] -mb-40">
        <div className="flex pt-8  flex-col  items-start gap-1">
          <Link to="/">
            <button
              type="submit"
              className="text-3xl text-white bg-[#070c47] border-solid py-1 px-2.5 hover:bg-gradient-to-r from-[#ac2626] via-[#f11cbc] to-red-400"
            >
              <FontAwesomeIcon icon={faHome} />
            </button>
          </Link>
          <Link to="/">
            <button
              className="text-3xl text-white  bg-[#070c47] border-solid py-1 px-3 hover:bg-gradient-to-r from-[#ac2626] via-[#f11cbc] to-red-400"
              type="submit"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </Link>
          <Link to="/add-new">
            <button
              className="text-3xl text-white  bg-[#070c47] border-solid py-1 px-3 hover:bg-gradient-to-r from-[#ac2626] via-[#f11cbc] to-red-400"
              types="submit"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Link>
        </div>
      </div>

<div className="text-red-500 text-3xl tracking-widest font-bolder">
  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
</div>

      <div className= "grid grid-cols-2 grid-rows-4 m-20 gap-x-10 gap-y-5">
        {books.map((book) => (
          <div className=" flex gap-4 border-solid rounded-lg border-4 pl-5 pr-5 bg-rose-100 pt-5  hover:bg-[rgba(175,118,153,0.5)] break-all"
            key={book._id}
          >
           
            <Link to={`/books/${book._id}`}>
           
              <div className="w-52">
              <img
                src={book.image}
                alt={book.title}
              />
              </div>
             
            </Link>
            <div>
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p className="text-[#0e0c0c] font-italic">
              <span className="font-bold italic">Author:</span>{" "}
              {book.author?.firstName + " " + book.author?.lastName}
            </p>
            <p className="text-[#0b0c0c]   ">
              <span className="font-bold italic">Publishing Year:</span>{" "}
              {book.publishDate}
            </p>
            <p className="text-[#0b0c0c] font-italic">
              {" "}
              <span className="font-bold italic">Descriptions:</span>{" "}
              {book.summary}
            </p>
            <p className="text-[#0b0c0c] font-italic">
              <span className="font-bold italic">Genre: </span> {book.genre}
            </p>
            <p className="text-[#0b0c0c] font-italic">
              {" "}
              <span className="font-bold italic">Pdf: </span>
              <Link className="italic font-bold text-blue-700" to={book.pdf}>
                Link
              </Link>
            </p>
            </div>
            </div>
        
        ))}
      </div>
    </div>
  );
};
export default Booklist;


