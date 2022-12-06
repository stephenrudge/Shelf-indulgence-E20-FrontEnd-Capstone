import { Link, useParams } from "react-router-dom"
import "./Book.css"


export const Book = ({id, title, author, totalPageCount, bookType, coverImg, statusId}) =>{
   
    return <section className="bookCard">
        <img src={coverImg} className="coverImg"></img>
                <div className="bookTitle">Title: {title}</div>
            <div className="author">Author: {author}</div>
            <div className="details">         
            <div className="totalPage">Total Page Count:{totalPageCount}</div>
            <div className="bookType"> Book Type:{bookType}</div>
                {statusId!==3? <Link to={`/home/bookDetails/${id}`} className="bookLink">{title}'s Details</Link>: "" }</div>
    </section>
}
