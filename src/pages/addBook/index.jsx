import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React, { useState } from 'react';

const AddBook = () => {
  return (
    <div>

      <Navbar />
     

      <div className="image pl-8 pt-40   ">
      <h3 className="font-bold text-2xl text-gray-300">Add new book</h3>
      <form className="flex flex-col pt-4 w-full max-w-lg box-border shadow-pink" action="">
      <div class="mb-4">
      <label class="block text-gray-300 text-sm font-bold mb-2" for="username">
        TITLE
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder=""/>
    </div>
       
    <div class="mb-4">
      <label class="block text-gray-300 text-sm font-bold mb-2" for="Authors">
        AUTHORS
        
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="authors" type="text" placeholder=""/>
      <p className="italic text-gray-200 font-semibold">Seperate authors with a comma.</p>
    </div>

    <div class="mb-4">
      <label class="block text-gray-300 text-sm font-bold mb-2" for="Description">
        DESCRIPTION
      </label>
      <input className="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-8" id="description" type="text" placeholder=""/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-300 text-sm font-bold mb-2" for="Publisher">
        PUBLISHER
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="publisher" type="text" placeholder=""/>
    </div>

        <div>  
        <h3 className="text-lg font-bold text-gray-300">Publish Date</h3>

        <form className="flex flex-row gap-6 pt-2" action="">
        <div class="mb-4">
      <label class="block text-gray-300 text-sm font-bold mb-2" for="Month">
        MONTH
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="month" type="text" placeholder="MM"/>
    </div>
        <div class="mb-4">
      <label class="block text-gray-300 text-sm font-bold mb-2" for="Day">
        DAY
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Day" type="text" placeholder="DD"/>
    </div>

        <div class="mb-4">
      <label class="block text-gray-300 text-sm font-bold mb-2" for="Year">
        YEAR
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Year" type="text" placeholder="YYYY"/>
    </div>
        </form>

        <div className="mb-3 w-96">
          <label
            htmlFor="formFileMultiple"
            className="mb-2 inline-block text-gray-300 font-semibold dark:text-neutral-200"
          >
          Add Book Image
          </label>
          <input
            className=" m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-400 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            id="formFileMultiple"
            multiple
          />
      </div>
        </div>

        <div className="pb-6"><button className="bg-red-500 p-2 rounded  hover:bg-gray-500 font-semibold border-none " type="submit">SUBMIT</button></div> 
        
      </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default AddBook;
