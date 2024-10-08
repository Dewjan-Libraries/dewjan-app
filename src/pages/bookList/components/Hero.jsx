const Hero = () => {
  return (
    <div className="hero">
      <div className="text-5xl pt-96 pb-10 text-white ml-7 ">
        <h1 >Library Management App</h1>
      </div>
      <div className="flex  justify-between text-white border solid text-2xl border-orange-400 border-l-orange-400 rounded-lg items-center w-[95vw] ml-6">
        <div className=" flex  w-[70%] h-[20vh] bg-orange-300 pl-10 rounded-lg hover:bg-red-500 hover:border-red-400  ">
          <button  type="submit">
            {" "}
            Search 
          </button>
          <input  className="w-[60vw] bg-orange-300" type="text" placeholder="......"/>
        </div>
        <div className="flex justify-center flex-col items-center w-[35%] h-[20vh]  bg-slate-500 text-2xl rounded-r-lg  hover:bg-red-500 hover:border-red-400">
          <h3>
            The library Opens
          </h3>
          <h2 className="pt-3 text-orange-500">6:00am - 12:00am</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
