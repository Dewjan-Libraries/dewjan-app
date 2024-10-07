import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const AddBook = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <span>add new book</span>
      <form action="">
        <input type="text" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddBook;
