import { useEffect, useState } from "react";
import { Book } from "./Book";
import "./BookList.css"

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
    <article className="bookCardContainer">
      <h1>Shelf Indulgence</h1>
        <h2>Reading</h2>
        <br></br>
      <div className={`${readingBooks.length > 0 ? "currentlyReading": "" }`}  >
        {readingBooks.map((book) => (
          <Book
            key={`book--${book.id}`}
            id={book.id}
            title={book.title}
            author={book.author}
            totalPageCount={book.totalPageCount}
            bookType={book.bookType}
            coverImg={book.coverImg}
            startDate={book.startDate}
          />
        ))}
                       
                        
         <br></br>               
                    
      </div>
          <div className="reading" />
        <h2>To Read</h2>
        <div className={`${toReadBooks.length > 0 ? "toRead": "" }`}  >
        <br></br>
        {toReadBooks.map((book) => (
          <Book
            key={`book--${book.id}`}
            id={book.id}
            title={book.title}
            author={book.author}
            totalPageCount={book.totalPageCount}
            bookType={book.bookType}
            coverImg={book.coverImg}
            startDate={book.startDate}
            statusId={book.statusId}
          />
        ))}
      </div>
    </article>
  );
};
