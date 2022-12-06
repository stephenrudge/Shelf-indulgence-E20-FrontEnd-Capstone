import { Outlet, Route, Routes} from "react-router-dom";
import {  FinishedBooksList } from "./FinishedBooks";
import { Login } from "../auth/Login";
import { BookForm } from "./AddBook";
import { Book } from "./Book";
import { BooksList } from "./BookList";
import { BookDetails } from "./BookDetails";
import { EditBooks } from "./EditBook";




export const ApplicationViews = () => {
  const localBookUser = localStorage.getItem("capstone_user");
  const bookUserObject = JSON.parse(localBookUser);

  if (bookUserObject){
    return (
      <Routes>
        <Route path="/" element={
          <>
             {/* <h1>Shelf Indulgence</h1> */}
    
        <Outlet />
        </> 
      }>

        <Route path="home/bookDetails/:id" element={ < BookDetails />   } />
        <Route path="/finishedBooks" element={<FinishedBooksList /> } />
        <Route path="/home" element={<BooksList />} />
        <Route path="/addBook" element={<BookForm /> } />
        <Route path="/login" element={<Login />} />
        <Route path="edit/:booksId" element={ <EditBooks />
        } />
        </Route>
     </Routes>
    )
  
    }
  }
