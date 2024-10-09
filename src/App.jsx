
import './App.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookList from './pages/bookList';
import AddBook from './pages/addBook';
import BookDetails from './pages/bookDetails';
import Hero from './pages/hero';



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
  path:"/books/:id",
  element: <BookDetails/>,
}
  ])
  return  <RouterProvider router= {router}/>
  
}

export default App;
