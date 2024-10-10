
import './App.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookList from './pages/bookList';
import AddBook from './pages/addBook';
import BookDetails from './pages/bookDetails';
import Login from './pages/forms/login';
import Register from './pages/forms/reg';
import Join from './pages/join';
import EditBook from './pages/editBook';
import Hero from './pages/hero';
import About from './pages/about';


  
function App() {

  const router = createBrowserRouter ([
{
  path:"/",
  element:<Hero/>,
},
{
  path:"/list",
  element:<BookList/>,
},
{
  path:"/add-new",
  element: <AddBook/>,
},
{
  path:"/dewjan",
  element: <About/>,
},
{
  path:"/books/:id",
  element: <BookDetails/>,
},
{
  path:"/form",
  element: <Login/>,
},
{
  path:"/edit",
  element: <EditBook/>,
},
{
  path:"/reg",
  element: <Register/>,
},
{
  path:"/video",
  element: <Join/>,
}


  ])
  return  <RouterProvider router= {router}/>
  
}

export default App;
