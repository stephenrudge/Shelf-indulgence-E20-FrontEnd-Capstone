import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

import "./EditBook.css"


export const EditBooks = () => {
    const [book, updateEditBooks] = useState({
        title: "",
        author: "",
        currentPageCount:0,
        totalPageCount: 0,
        bookType: "",
        coverImg: "",
        startDate: "",
        
        // statusId: 1,
      });   
      const {booksId} = useParams()
      const navigate = useNavigate();

      useEffect(() => {
        fetch(`http://localhost:8088/usersBooks/${booksId}`)
          .then((response) => response.json())
          .then(updateEditBooks);
      }, []);

      const handleClickEditBook = (event) => {
          event.preventDefault()
        fetch(`http://localhost:8088/usersBooks/${booksId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        })
        navigate(`../home/bookDetails/${booksId}` ,
        {replace:true})
          };
        
          
          return (
              <form className="bookForm">
      <h2 className="bookForm_title">Edit Book</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Title of Book"
            value={book.title}
            onChange={(evt) => {
                const copy = { ...book };
                copy.title = evt.target.value;
                updateEditBooks(copy);
            }}
            />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="Author">Author:</label>
          <input
            // required autoFocus
            type="text"
            className="form-control"
            placeholder="Author of Book"
            value={book.author}
            onChange={(evt) => {
                const copy = { ...book };
                copy.author = evt.target.value;
                updateEditBooks(copy);
            }}
              />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="bookType">Book Type:</label>
          <select
            name="bookType"
            value={book.bookType}
            onChange={(evt) => {
                const copy = { ...book };
                copy.bookType = evt.target.value;
                updateEditBooks(copy);
            }}
            >
              <option value="Placeholder">---</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Adventure">Adventure</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Poetry">Poetry</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="History">History</option>
            <option value="Self Help">Self-Help</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Fiction">Fiction</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="CurrentPageCount">Current Page Count:</label>
          <input
            required
            autoFocus
            type="number"
            className="form-control"
            placeholder="Current Page Count"
            value={book.currentPageCount}
            onChange={(evt) => {
                const copy = { ...book };
                copy.currentPageCount = parseInt(evt.target.value);
                updateEditBooks(copy);
            }}
            />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="totalPageCount">Total Page Count:</label>
          <input
            // required autoFocus
            type="number"
            className="form-control"
            placeholder="0"
            value={book.totalPageCount}
            onChange={(evt) => {
                const copy = { ...book };
                copy.totalPageCount = parseInt(evt.target.value);
                updateEditBooks(copy);
            }}
            />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="coverImage">Cover Photo:</label>
          <input
            type="url"
            className="url"
            placeholder="https://example.com"
            pattern="https://.*"
            size=""
            value={book.coverImg}
            onChange={(evt) => {
                const copy = { ...book };
                copy.coverImg = evt.target.value;
                updateEditBooks(copy);
            }}
            />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="totalPageCount">Start Date:</label>
          <input
            
            // required autoFocus
            type="date"
            className="form-control"
            placeholder="mm-dd-yyyy"
            required
            value={book.startDate}
            onChange={(evt) => {
              const copy = { ...book };
              copy.startDate = evt.target.value;
              updateEditBooks(copy);
            }}
            />
        </div>
      </fieldset>
      
      <button
        onClick={(clickEvent) => handleClickEditBook(clickEvent)}
        className="btn btn-primary"

        >
        Save 
      </button>
    </form>
  );
}