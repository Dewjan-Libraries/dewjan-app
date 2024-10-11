import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMagnifyingGlass,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { Link, useParams } from "react-router-dom";


import { NavLink } from "react-router-dom";

const BookDetails = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getBook = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${BASE_URL}/book/${id}`);
      setBook(response.data);
    } catch (err) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div>
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
    </div>
</div>

</nav>
    <div className="h-full mx-auto p-4">
      {/* <div className="flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded"
          placeholder="Search for a book..."
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </div> */}

      {/* <div className="flex justify-around pt-10 items-center ">
        <div className=" shadow-inner items-center flex justify-between border bg-[#DA2626] pr-20 hover:bg-gradient-to-r from-[#cc2828] via-[#dee0ee] to-pink-600 rounded-lg text-2xl mr-6" action="">
          <input  className=" items-center pl-10 focus:outline-none shadow-inner h-14 w-[60vw]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  
          type="text" placeholder="search here ....."/>
          <button className="pl-20 text-white " 
          onClick={handleSearch} 
          type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className=" shadow-inner items-center flex border h-14 w-[10vw]  px-7 rounded-lg  bg-white">
          <select className="">
            <option value="Title">Title</option>
            <option value="Author">Author</option>
            <option value="Genre">Genre</option>
            <option value="Year">Year</option>
          </select>
        </div>
      </div> */}
      <div className="mr-[1250px] mt-20">
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

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500 text-3xl">{error}</p>}

      {book && (
        <div
          key={book._id}
          className="border-solid  flex flex-col justify-center items-center border-2 h-full rounded-lg pr-8 pl-8 mr-60 ml-60  -mt-24"
        >
          <img
            className="w-full h-auto"
            src={book.image}
            alt={book.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/images/bookimg.png";
            }}
          />
          <h1 className="text-2xl font-bold">{book.title}</h1>
          <p className="text-gray-700">
            <span className="font-bold">Author:</span> {book.author?.firstName}{" "}
            {book.author?.lastName}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Publishing Year:</span>{" "}
            {book.publishDate}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Descriptions:</span> {book.summary}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Genre:</span> {book.genre}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Pdf:</span>{" "}
            <Link to={book.pdf} className="text-blue-500 underline">
              Link to Book
            </Link>
          </p>
        </div>
      )}
    </div>
    </div>
  );
};

export default BookDetails;
