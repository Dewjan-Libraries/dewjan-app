import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const AddBook = () => {
  return (
    <div>

      <Navbar />
     

      <div className="image pl-8 pt-40  ">
      <h3 className="font-bold text-2xl text-gray-300">Add new book</h3>
      <form className="flex flex-col pt-4 w-full max-w-lg" action="">
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
        </div>

        <div className="pb-6"><button className="bg-red-500 p-2 rounded  hover:bg-gray-500 font-semibold border-none " type="submit">SUBMIT</button></div> 
        
      </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default AddBook;
