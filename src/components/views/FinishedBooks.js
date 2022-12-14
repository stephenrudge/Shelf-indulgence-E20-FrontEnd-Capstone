import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { Book } from "./Book";
import "./FinishedBooks.css"


export const FinishedBooksList = () => {
    const [books, setBook] = useState([]);
    const [finishedBooks, setFinishedBooks] = useState([])
  
  
    useEffect(() => {
      fetch(`http://localhost:8088/usersBooks?statusId=3`)  
        .then((response) => response.json())
        .then(setFinishedBooks);
    }, []);
  
console.log(finishedBooks)
  return (
   <>
    <div className="title">
    <h1>Finished Books</h1>
    <div className="emptyBooks">
      {
      finishedBooks.length === 0
       ? <span> You do not have any Finished Books click 
        <Link to="/addBook"> here </Link> to add your first book` </span>
       : "" 
       }
      </div> 
   </div>
   <section className={`${finishedBooks.length >0 ? "finishBooks": "" }`}  > 
   

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
       
       </section>
       </>
   )
    }
