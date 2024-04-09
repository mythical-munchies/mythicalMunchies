import { mockBooks } from "../BookData";
import "./styles/Books.css"


const Literature = () => {
  return(
    <>
   
    <div className="books">
      {/* <div className="title-box">
      <h2 className="book-page-title">The BookShelf</h2>
      </div> */}
    {mockBooks.map((book) => {
      return (
        <div className="books-container">
          <div key={book.id} className="book-card">
            <img  className="book-img" src={book.img_url} alt={`${book.img_url}'s image`} />
            <a href="somesite.com" className="book-title-books">{book.title}</a>
            <h3 className="book-author">By: {book.author}</h3>
          </div>
        </div>
      );
    })}
    </div>
    </>
  )
}

export default Literature;