import { useEffect, useState } from "react";
import { Book } from "./Book";
//
export const BooksList = () => {
  const [books, setBook] = useState([]);
  const [readingBooks, setReadingBooks] = useState([]);
  const [toReadBooks, setToReadBooks] = useState([]);
  const [finishedBooks, setFinishedBooks] = useState([])


  const localBookUser = localStorage.getItem("capstone_user");
  const bookUserObject = JSON.parse(localBookUser);

  useEffect(() => {
    fetch(`http://localhost:8088/usersBooks?userId=${bookUserObject.id}`)
      .then((response) => response.json())
      .then(setBook);
  }, []);

  useEffect(() => {
    const readingFilter = books.filter((book) => book.statusId === 2);
    const toReadFilter = books.filter((book) => book.statusId === 1);
    const finishedReadingFilter = books.filter((book) => book.statusId=== 3);
    setReadingBooks(readingFilter);
    setToReadBooks(toReadFilter);
    setFinishedBooks(finishedReadingFilter)
  }, [books]);

  return (
    <article className="bookCard">
      <div className="currentlyReading">
        <h2>Reading</h2>
        {readingBooks.map((book) => (
          <Book
            key={`book--${book.id}`}
            id={book.id}
            title={book.title}
            author={book.author}
            totalPageCount={book.totalPageCount}
            bookType={book.bookType}
            coverImg={book.coverImg}
          />
        ))}
                       
                        
                        
                    
      </div>
{/* 
      <div className="finishedReading">
        <h2>Reading</h2>
        {finishedBooks.map((book) => (
          <Book
            key={`book--${book.id}`}
            id={book.id}
            title={book.title}
            author={book.author}
            totalPageCount={book.totalPageCount}
            bookType={book.bookType}
            coverImg={book.coverImg}
          />
        ))}
                       
                        
                        
                    
      </div> */}




      <div className="toRead">
        <h2>To Read</h2>
        {toReadBooks.map((book) => (
          <Book
            key={`book--${book.id}`}
            id={book.id}
            title={book.title}
            author={book.author}
            totalPageCount={book.totalPageCount}
            bookType={book.bookType}
            coverImg={book.coverImg}
            statusId={book.statusId}
          />
        ))}
      </div>
    </article>
  );
};
