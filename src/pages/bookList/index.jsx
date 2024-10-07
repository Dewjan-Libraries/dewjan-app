import Hero from "./components/Hero";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const BookList = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <div>book list goes here</div>
      <Footer />
    </div>
  );
};

export default BookList;
