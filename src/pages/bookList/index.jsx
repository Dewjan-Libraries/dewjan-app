import Hero from "./components/Hero";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Displaylist from "./Displaylist";

const BookList = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Displaylist/>
      <div>book list goes here</div>
      <Footer />
    </div>
  );
};

export default BookList;
