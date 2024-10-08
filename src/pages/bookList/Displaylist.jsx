import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Displaylist = () => {
    const [books, setBooks] = useState ([]);
    const [selectedLetter, setSelectedLetter] = useState ('ALL');

useEffect(() => {
    const fetchBooks = async () => {
        const response = await axios.get('https://book-information-library.p.rapidapi.com/api/books/book-recommendations?genre=Fiction')
        setBooks (response.data);
    };
    fetchBooks ();
}, 
[]);

const filterBooksByLetter = (letter) => {
        setSelectedLetter(letter);
     };

     const filteredBooks = selectedLetter === 'ALL' 
  ? books 
   : books.filter(book => book.title.charAt(0).toUpperCase() === selectedLetter);

 const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#';


  return (
    <div className="container mx-auto p-4">
          <div className="flex justify-center space-x-2 mb-4">
            {alphabet.split('').map((letter) => (
              <button 
                key={letter} 
                className="bg-blue-500 text-white rounded px-2 py-1"
                onClick={() => filterBooksByLetter(letter)}
              >
                {letter}
              </button>
            ))}
            <button 
              className="bg-blue-500 text-white rounded px-2 py-1"
              onClick={() => filterBooksByLetter('ALL')}
            >
              ALL
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredBooks.map(book => (
              <div key={book.id} className="border p-4 rounded-lg">
                <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover" />
                <h2 className="text-lg font-bold">{book.title}</h2>
                <p className="text-gray-600">Author: {book.author}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Displaylist;

 
