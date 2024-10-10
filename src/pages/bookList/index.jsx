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
  const [selectedLetter, setSelectedLetter] = useState("ALL");

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        "https://dewjan-api-nsqg.onrender.com/books"
      );
      setBooks(response.data);
    };

    fetchBooks();
  }, 
  
  []);

  const filterBooksByLetter = (letter) => {
    setSelectedLetter(letter);
    
  };

  const filteredBooks =
    selectedLetter === "ALL"
      ? books
      : books.filter(
          (book) => book.title.charAt(0).toUpperCase() === selectedLetter
        );

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="bg-[url('C:\Users\debam\Desktop\react_project_theo\dewjan-app\src\assets\images\image8.png')]">
      <div className="flex justify-around pt-10 items-center ">
        <form className=" shadow-inner items-center flex justify-between border bg-red-600 pr-20 hover:bg-gradient-to-r from-[#cc2828] via-[#dee0ee] to-pink-600 rounded-lg text-2xl" action="">
          <input  className=" items-center pl-10 focus:outline-none shadow-inner h-14 w-[60vw]" type="text" placeholder="search here ....."/>
          <button className="pl-20 text-white " type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="bg-gradient-to-r from-[#c78b8b] via-[#c2c3cf] to-pink-600 shadow-inner items-center  flex border h-14 w-[18vw]  px-7 rounded-lg ">
          <Link to="/books/:id">
            <button className="">View Single Book</button>
          </Link>
          </div>
      </div>
      <div className="flex">
        <div className="flex pt-40 flex-col  pl-5 items-start gap-1">
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
      
        <div className="mx-auto h-[100vh]">
          <div className="flex justify-center space-x-4 mb-4 pt-16">
            {alphabet.split("").map((letter) => (
              <button
                key={letter}
                className="bg-[#db2932] text-white rounded px-2 py-1 w-[80%]"
                onClick={() => filterBooksByLetter(letter)}
              >
                {letter}
              </button>
            ))}
            <button
              className="bg-[#cf5b61] text-white rounded px-2 py-1"
              onClick={() => filterBooksByLetter("ALL")}
            >
              ALL
            </button>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-4">
            {filteredBooks.map((book) => (
              <div
               key={book.id} className="border p-4 rounded-lg">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
                <h1 className="text-2xl font-bold">{book.title}</h1>
                <p className="text-[#0e0c0c] font-bold">Author: {book.author}</p>
                <p className="text-[#0b0c0c} font-bold ">Content: {book.content}</p>
                <p className="text-[#0b0c0c] font-bold">Decription: {book.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booklist;
