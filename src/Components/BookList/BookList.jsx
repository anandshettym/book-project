import React from 'react'
import "./booklist.css"
import { useGlobalContext } from '../../context';
import Book from "./Book"
import coverImg from "../../images/cover_not_found.jpg";
import Loader from "../Loader/Loader"


const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  console.log(books)
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loader />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            }) 
          }
        </div>
      </div>
    </section>
  )
}


export default BookList
