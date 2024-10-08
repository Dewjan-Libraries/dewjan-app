const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1 className="text-3xl pt-96 text-white ">Library Management App</h1>
      </div>
      <div className="flex justify-between text-white items-center w-[100vw] h-[30vh]">
        <div className=" flex  w-[70%] h-[50%] bg-orange-300 ml-1 pl-10 border solid border-black text-2xl">
          <button  type="submit">
            {" "}
            Search ...
          </button>
          <input type="text"  placeholder=""/>
        </div>
        <div className="flex justify-center items-center w-[30%] h-[50%] border solid border-black bg-slate-500 text-2xl ">
          <h3>
            The library Opens <span>24/7</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
