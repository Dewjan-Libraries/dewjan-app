import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const AddBook = () => {
  return (
    <div>
      <Navbar />
      <span>add new book</span>
      <form action="">
        <input type="text" />
        <button type="submit">submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default AddBook;
