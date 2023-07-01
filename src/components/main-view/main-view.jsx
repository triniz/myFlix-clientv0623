import { Fragment, useState } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../book-view/book-view";


export const MainView = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Eloquent JavaScript",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
      author: "Marijn Haverbeke"
    },
    {
      id: 2,
      title: "Mastering JavaScript Functional Programming",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      author: "Federico Kereki"
    },
    {
      id: 3,
      title: "JavaScript: The Good Parts",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
      author: "Douglas Crockford"
    },
    {
      id: 4,
      title: "JavaScript: The Definitive Guide",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      author: "David Flanagan"
    },
    {
      id: 5,
      title: "The Road to React",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41MBLi5a4jL._SX384_BO1,204,203,200_.jpg",
      author: "Robin Wieruch"
    }
  ]);

  const [selectedBook, setSelectedBook] = useState(null);

  if (selectedBook) {
    return <BookView 
    bookData={selectedBook} 
    onBackClick={() => setSelectedBook(null)} // set the selected book back to null
  />;
  }
  
    if (books.length === 0) {
      return <>The list is empty!</>;
    }
  
    return (
      <>
        {books.map((book) => {
            return (
            <BookCard 
              key={book.id} 
              bookData={book}
              onBookClick={(newSelectedBook) => {
                setSelectedBook(newSelectedBook);
              }}
            />
            );
        })}
      </>
    );
  };