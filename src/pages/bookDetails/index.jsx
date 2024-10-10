import EditDelete from "../../components/EditDelete";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BookDetails = () => {
  return (
    <div>
      <div className="flex justify-around pt-20 pl-10 items-center text-2xl">
        <form
          className=" shadow-inner items-center flex justify-between border bg-[#4B5563] pr-20 rounded-lg"
          action=""
        >
          <input
            className=" items-center pl-10 focus:outline-none shadow-inner h-14 w-[60vw]"
            type="text"
            placeholder="search here ....."
          />
          <button className="pl-20 text-white" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className=" shadow-inner items-center flex border h-14 w-[10vw]  px-7 rounded-lg  bg-white">
          <select className="">
            <option value="Title">Title</option>
            <option value="Author">Author</option>
            <option value="Genre">Genre</option>
            <option value="Year">Year</option>
          </select>
        </div>
      </div>
      <EditDelete />
      <div className="h-screen">BookDetails</div>

      <Footer />
    </div>
  );
};

export default BookDetails;
