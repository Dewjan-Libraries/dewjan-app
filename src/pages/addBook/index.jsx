
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BASE_URL } from "../../constants";

const AddBook = () => {
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/authors`);
    setAuthors(response.data)
  }

  useEffect(() => {
    getAuthors();
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // Collect the form data
      const formData = new FormData(event.target);

      // Post data to API

      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get('title'),
        author: formData.get('author'),
        description: formData.get('description'),
        genre: formData.get('genre'),
        // publisher: formData.get('publisher'),
        // month: formData.get('month'),
        // day: formData.get('day'),
        // year: formData.get('year'),
        // formFileMultiple: formData.get('formFileMultiple'),
      })
    } catch (error) {
      console.log(error)
    }


  };


  return (
    <div>
      <Navbar />
      <div className="image pl-4  ">
        <h3 className="font-bold text-2xl text-gray-300 ">Add new book</h3>
        <div className="image pl-10 pt-20   ">

          <form onSubmit={handleSubmit} className="flex flex-col pt-4 w-full max-w-lg box-border shadow-pink" action="">
            <h3 className="font-bold text-2xl text-[#4B5563]-600 pb-4">Add new book</h3>

            <div className="mb-4">
              <label className="block text-[#4B5563]-600 text-sm font-bold mb-2" htmlFor="username">
                TITLE
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500" name="title" id="title" type="text" placeholder="Name of book" />
            </div>

            <div className="mb-4">
              <label className="block text-[#4B5563]-600 text-sm font-bold mb-2">AUTHORS</label>
              <select name="author" className="w-full text-black mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                {authors.map((author) => {
                  return <option key={author._id} value={author._id}>{author.firstName + " " + author.lastName} </option>
                })}

              </select>
            </div>

            <div className="mb-4">
              <label className="block text-[#4B5563]-600 text-sm font-bold mb-2">GENRE</label>
              <select
                name="genre"
                // value="genre"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
    <option value="">paranomal romance</option>
    <option value=""> romance</option>

                
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-[#4B5563]-600 text-sm font-bold mb-2" htmlFor="Description">
                DESCRIPTION
              </label>
              <input className="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 py-8" name="description" id="description" type="text" placeholder="Summary" />
            </div>

            <div className="mb-4">
              <label className="block text-[#4B5563]-600 text-sm font-bold mb-2" htmlFor="Publisher">
                PUBLISHER
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500" name="publisher" id="publisher" type="text" placeholder="Name" />
            </div>
            <h3 className="text-lg font-bold text-[#4B5563]-600">Publish Date</h3>

            <div className="flex gap-4">

              {/* <form className="flex flex-row gap-6 pt-2" action=""> */}
              <div className="mb-4 ">
                <label className="block text-[#4B5563]-600 text-sm font-bold mb-2" htmlFor="Month">
                  MONTH
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500" name="month" id="month" type="text" placeholder="MM" />
              </div>
              <div className="mb-4">
                <label className="block text-[#4B5563]-600 text-sm font-bold mb-2" htmlFor="Day">
                  DAY
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500" name="day" id="day" type="text" placeholder="DD" />
              </div>

              <div className="mb-4">
                <label className="block text-[#4B5563]-600 text-sm font-bold mb-2" htmlFor="Year">
                  YEAR
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500" name="Year" id="Year" type="text" placeholder="YYYY" />
              </div>
              {/* </form> */}

              <div className="mb-3 w-96">
                <label
                  htmlFor="formFileMultiple"
                  className="mb-2 inline-block text-[#4B5563]-600 font-semibold dark:text-neutral-200"
                >
                  Add Book Image
                </label>
                <input
                  className=" m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-500 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-600 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-600 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="formFileMultiple"
                  name="formFileMultiple"
                  multiple
                />
              </div>
            </div>

            <div className="pb-6"><button className="bg-red-500 p-2 rounded  hover:bg-gray-500 font-semibold border-none " type="submit">Add New</button></div>

          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AddBook;
