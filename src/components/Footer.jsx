import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import {Link } from "react-router-dom";

// import I from "../constants/index";


const Footer = () => {
  return (
    <div className="flex  h-full  justify-between  w-[100%]">
      <div className=" grid grid-cols-3 gap-x-10 pt-10 pr-10 pl-10 bg-[#FEE2E2] w-screen">
        <div className="">
        <h1 className="text-3xl pb-5">About the Library</h1>
        <p className="flex flex-col gap-4">
          {/* <Link to="/pro" onclick={handleClick}>pro</Link> */}
          <Link to="/Home">Vison, Mission & Values
          </Link>
          <Link to="/About">History of the Library
          </Link>
          <Link to="/Home">Job at the Library
          </Link>
        </p>
        </div>
        <div>
        <h1 className="text-3xl pb-5">Accessibility</h1>
        <p className="flex flex-col gap-4">
        <Link to="/contact">Contact
        </Link>
        <Link to="/Viewing Books">Available Books
        </Link>
        <Link to="/Viewing Books">Print Publication
        </Link>
          
        </p>
        </div>
        <div>
        <h1 className="text-3xl pb-5">Library Policies</h1>
        <p className="flex flex-col gap-4">
        <Link to="/Hero">Opening time
        </Link>
        <Link to="/Hero">Open Data and Feed
        </Link>
        <Link to="/Home">Address
        </Link>
        </p>
        </div>
        
      </div>
      <div className="bg-[#e09494] pt-10 pl-10 ">
        <h1 className="text-3xl font-bold"><span className="text-rose-800 font-bold"><FontAwesomeIcon icon={faBookOpenReader} /></span> Public Library </h1>
        <p className="text-2xl">123 Kojo Thompson Road, Accra</p>
        <p className="text-2xl">030 546 789 123</p>
        <div className="flex gap-10 pt-5 pb-5">
          <span className="text-4xl text-blue-800 "><FontAwesomeIcon  className="" icon= {faFacebook} /></span>
          <span className="text-4xl text-red-600"><FontAwesomeIcon icon= {faSquareInstagram} /></span>
          <span className="text-4xl text-blue-500"><FontAwesomeIcon icon= {faSquareTwitter }  /></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
