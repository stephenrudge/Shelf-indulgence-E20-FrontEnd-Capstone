import { Link, useParams } from "react-router-dom"


export const Book = ({id, title, author, totalPageCount, bookType, coverImg, statusId}) =>{
    console.log(statusId)
    // const {title} = useParams()
    return <section className="bookCard">
        <img src={coverImg} className="coverImg"></img>
                <div className="bookTitle">Title: {title}</div>
            <div className="author">Author: {author}</div>
            <div className="details">
                {/* <Link to={`bookDetails/${id}`}>Book Details</Link> */}
                {statusId!==3? <Link to={`bookDetails/${id}`}>Book Details</Link>: "" }</div>
            <div className="totalPage">Total Page Count:{totalPageCount}</div>
            <div className="bookType"> Book Type:{bookType}</div>
    </section>
}
