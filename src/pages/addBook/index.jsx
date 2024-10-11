import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BASE_URL } from "../../constants";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    // genre: '',
    summary: '',
    
    // publishDate: '',
    // formFileMultiple: [],
  });

  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/authors`);
      setAuthors(response.data);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  useEffect(() => {
    getAuthors();
  }, []);

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'formFileMultiple') {
      setFormData((prevData) => ({ ...prevData, [name]: files }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the title field is filled
    if (!formData.title.trim()) {
      alert('The title field is required. Please enter a title for the book.');
      return; // Stop the submission if the title is empty
    }

    try {
      const bookData = {
        title: formData.title,
        author: formData.author,
        summary: formData.summary,
     
      //   genre: formData.genre,
      //   publishDate: formData.publishDate,
      //   images: formData.formFileMultiple ? Array.from(formData.formFileMultiple).map(file => file.name) : [],
      };

      await axios.post(`${BASE_URL}/books`, bookData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Book added successfully');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="image pl-8 pt-36">
        <form onSubmit={handleSubmit} className="flex flex-col pt-4 w-full max-w-lg box-border shadow-pink">
          <h3 className="font-bold text-2xl text-[#4B5563]-600 pb-4">Add new book</h3>

          <div className="mb-4">
            <label className="block text-[#4B5563]-600 text-sm font-bold mb-2" htmlFor="title">
              TITLE
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
              name="title"
              id="title"
              type="text"
              placeholder="Name of book"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#4B5563]-600 text-sm font-bold mb-2" htmlFor="genre">
              Genre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
              name="genre"
              id="genre"
              type="text"
              placeholder="Genre"
              value={formData.genre}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#4B5563]-600 text-sm font-bold mb-2">AUTHORS</label>
            <select
              name="author"
              className="w-full text-black mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.author}
              onChange={handleInputChange}
            >
              <option value="">Select an author</option>
              {authors.map((author) => (
                <option key={author._id} value={author._id}>
                  {author.firstName + " " + author.lastName}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="mb-4">
            <label className="block text-[#4B5563]-600 text-sm font-bold mb-2">GENRE</label>
            <select
              name="genre"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.genre}
              onChange={handleInputChange}
            >
              <option value="">Select a genre</option>
              <option value="paranormal romance">Paranormal Romance</option>
              <option value="romance">Romance</option>
            </select>
          </div> */}

          <div className="mb-4">
            <label className="block text-[#4B5563]-600 text-sm font-bold mb-2" htmlFor="summary">
              SUMMARY
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
              name="summary"
              id="summary"
              placeholder="Summary"
              value={formData.summary}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* <div className="mb-4">
            <label className="block text-[#4B5563]-600 text-sm font-bold mb-2" htmlFor="publishDate">
              PUBLISH DATE
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
              name="publishDate"
              id="publishDate"
              type="date"
              value={formData.publishDate}
              onChange={handleInputChange}
            />
          </div> */}

          {/* <div className="mb-3 w-96">
            <label htmlFor="formFileMultiple" className="mb-2 inline-block text-[#4B5563]-600 font-semibold dark:text-neutral-200">
              Add Book Image
            </label>
            <input
              className="block w-full px-3 py-2 border border-solid border-gray-300 rounded-lg focus:outline-none"
              type="file"
              id="formFileMultiple"
              name="formFileMultiple"
              multiple
              onChange={handleInputChange}
            />
          </div> */}

          <div className="pb-6">
            <button className="bg-red-500 p-2 rounded hover:bg-gray-500 font-semibold border-none" type="submit">
              Add New
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
// }
};

export default AddBook;
