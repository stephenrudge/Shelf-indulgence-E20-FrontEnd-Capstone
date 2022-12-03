import { useState } from "react";
import { json, Navigate, useNavigate } from "react-router-dom";

export const BookForm = () => {
  const [book, update] = useState({
    title: "",
    author: "",
    totalPageCount: 0,
    bookType: "",
    coverImg: "",
    statusId: 1,
  });

  const navigate = useNavigate();

  const localBookUser = localStorage.getItem("capstone_user");
  const bookUserObject = JSON.parse(localBookUser);

  const handleSaveButtonClick = (event) => {
    const bookToSendToAPI = {
      userId: bookUserObject.id,
      title: book.title,
      author: book.author,
      totalPageCount: book.totalPageCount,
      bookType: book.bookType,
      coverImg: book.coverImg,
      statusId: book.statusId,
    };

    const sendData = async () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookToSendToAPI),
      };
      const response = await fetch(`http://localhost:8088/books`, options);
      await response.json();
      const response1 = await fetch(`http://localhost:8088/usersBooks`, options);
      await response1.json();
    };
    sendData();
    event.book.reset();
    navigate("/addBook");
  };

  return (
    <form className="bookForm">
      <h2 className="bookForm_title">Add New Book</h2>
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
              update(copy);
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
              update(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="bookType">Book Type:</label>
          <select
            name="bookType"
            onChange={(evt) => {
              const copy = { ...book };
              copy.bookType = evt.target.value;
              update(copy);
            }}
          >
            <option value="Placeholder">---</option>
            <option value="mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Adventure">Adventure</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Poetry">Poetry</option>
            <option value="ScienceFiction">Science Fiction</option>
            <option value="History">History</option>
            <option value="Other">Other</option>
          </select>
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
              update(copy);
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
              update(copy);
            }}
          />
        </div>
      </fieldset>
      <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Add Book
      </button>
    </form>
  );
};
