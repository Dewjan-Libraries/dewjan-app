import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/react-fontawesome";
// import { faSquareInstagram } from "@fortawesome/react-fontawesome";
// import { faSquareTwitter } from "@fortawesome/react-fontawesome";

// import I from "../constants/index";


const Footer = () => {
  return (
    <div className="flex h-[70vh]  justify-between bg-black w-[100vw]">
      <div className=" grid grid-cols-3 gap-x-10 pt-10 pr-10 pl-10 bg-blue-600 w-[70%] ">
        <div className="">
        <h1 className="text-3xl pb-5">About the Library</h1>
        <p className="">
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
        </p>
        </div>
        <div>
        <h1 className="text-3xl pb-5">Accessibility</h1>
        <p>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
        </p>
        </div>
        <div>
        <h1 className="text-3xl pb-5">Support Your Library</h1>
        <p>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
        </p>
        </div>
        <div>
        <h1 className="text-3xl pb-5">Library Policies</h1>
        <p>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
        </p>
        </div>
        <div>
        <h1 className="text-3xl pb-5">Culture Articles</h1>
        <p>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
          <a href="">Vison, Mission & Values</a>
        </p>
        </div>
        
      </div>
      <div className="bg-orange-300 w-[30%] pt-10 pl-10">
        <h1 className="text-3xl"><FontAwesomeIcon icon={faBookOpenReader} /> Public Library </h1>
        <p>123 Kojo Thompson Road</p>
        <p>Accra</p>
        <p>030 546 789 123</p>
        {/* <div className="flex  gap-10">
            <p className=""><FontAwesomeIcon icon= {faFacebook} /></p>
            <p className=""><FontAwesomeIcon icon= {faSquareInstagram} /></p>
            <p className=""><FontAwesomeIcon icon= {faSquareTwitter} /></p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
