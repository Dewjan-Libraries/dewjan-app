import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

const EditBook = () => {
    return (

        <div>
            <div className=' ml-4'>
                <button className="flex items-center p-2 text-gray-700 hover:text-red-500 hover:bg-gray-100 transition-all duration-200  border-gray-300 rounded-full " type='submit'>
                    <FontAwesomeIcon className="text-3xl  " icon={faCircleArrowLeft} />
                </button>
            </div>

            <div>
                <form className="pic max-w-xl mx-auto  p-8 rounded-lg shadow-2xl mt-10">
                    <h2 className="text-2xl text-white font-semibold mb-6 text-center">Edit Book Details</h2>
   
                    <div className="mb-6">
                        <label className="block text-white font-medium">Book Title</label>
                        <input
                            type="text"
                            name="title"
                            //   value="title"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter book title"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white font-medium">Author</label>
                        <select
                            name="author"
                            //   value="genre"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Fiction">Fiction</option>
                            <option value="Non-Fiction">Non-Fiction</option>
                            <option value="Science">Science</option>
                            <option value="History">History</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-white font-medium">Genre</label>
                        <select
                            name="genre"
                            //   value="genre"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Fiction">Fiction</option>
                            <option value="Non-Fiction">Non-Fiction</option>
                            <option value="Science">Science</option>
                            <option value="History">History</option>
                        </select>
                    </div>


                    <div className="flex justify-end mt-8">
                        <button
                            type="submit"
                            className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            className="ml-4 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default EditBook