import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Book } from "./Book";

import "./BookDetails.css";

export const BookDetails = () => {
  const [books, setAllBooks] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [progressBar, updateProgressBar] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8088/usersbooks/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAllBooks(data);
        updateProgressBar((data.currentPageCount / data.totalPageCount) * 100);
        console.log(data);
      });
  }, [id]);

  //   //

  

  const handleClickFinishBook = () => {
    fetch(`http://localhost:8088/usersBooks/${books.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statusId: 3 , }),
    });
  };

  //   //

  const handleClickDidNotStart = () => {
    fetch(`http://localhost:8088/usersBooks/${books.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentPageCount: 0, statusId: 1 }),
    });
  };

  //method that contains fetch call for each onClick:
  //i.e.:
  //
  const handleClickStartBook = () => {
    fetch(`http://localhost:8088/usersBooks/${books.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statusId: 2 }),
    });
  };

  const handleClickToReadBook = () => {
    fetch(`http://localhost:8088/usersBooks/${books.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statusId: 1 }),
    });
  };

  const handleClickDeleteBook = () => {
    return fetch(`http://localhost:8088/usersBooks/${books.id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/home");
    });
  };

  console.log(progressBar);

  return (
    <>
      <article className="BookDetails">
        <div className="bookCard">
          {" "}
          <h1>{books.title} Details</h1>
          <div className="daBookDeets">
            <img src={books.coverImg}></img>
          </div>
          <div className="bookText">
            <div>Title: {books.title}</div>
            <div>Author: {books.author}</div>
            <div>Current Page Count: {books.currentPageCount}</div>
            <div>Total Page Count: {books.totalPageCount}</div>
            <div>Start Date: {books.startDate}</div>
            <br></br>
            <div className="flex">
              Progress:{" "}
              <div className="progress">
                <div className="progressText">
                  {isNaN(progressBar) == false ? progressBar.toFixed(2) : 0} %
                </div>

                <div
                  className="progress_bar"
                  style={{ width: `${progressBar}%` }}
                ></div>
              </div>
            </div>
            {/* strech goal */}
            {/* <div>Start date: {books.startDate} </div> */}
          </div>
        </div>
        <button
          onClick={() => {
            handleClickStartBook();
            navigate("/home");
          }}
          className="startBook"
        >
          Start Book
        </button>
        <button
          onClick={() => {
            {
              handleClickFinishBook();
            }
            navigate("/finishedBooks");
          }}
          className="finishBook"
        >
          Finish Book
        </button>
        <button
          onClick={() => {
            navigate(`/edit/${books.id}`);
          }}
          className="editDetails"
        >
          Edit Details
        </button>

        <button
          onClick={() => {
            handleClickDidNotStart();
            navigate("/home");
          }}
          className="startBook"
        >
          Did Not Start
        </button>

        <button
          onClick={() => {
            {
              // confirmText()
            }
            if (window.confirm("Are you sure you want to delete this book?")) {
              handleClickDeleteBook();
            } else {
            }
          }}
          className="deleteBook"
        >
          Delete Book
        </button>
      </article>
    </>
  );
};
