import { Link, } from "react-router-dom"
import "./Book.css"


export const Book = ({id, title, author, totalPageCount, bookType, coverImg, statusId, startDate}) =>{
    // const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

      
  const initialDate = new Date(startDate);

  const updatedDate = new Date(initialDate.setDate(initialDate.getDate() + 1));

    return <section className="bookCard">
        <img src={coverImg} className="coverImg"></img>
            <div className="bookText">
             <div className="bookTitle">Title: {title}</div>
            <div className="author">Author: {author}</div>
            <div className="details">         
            <div className="totalPage">Total Page Count:{totalPageCount}</div>
            <div className="bookType"> Book Type:{bookType}</div>
            <div className="startDate"> Start Date: { statusId === 1 ? "Not Started": updatedDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
            </div>
                {statusId!==3? <Link to={`/home/bookDetails/${id}`} className="bookLink">{title}'s Details</Link>: "" }</div>
    </section>
}
