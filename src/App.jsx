import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import BookList from "./Components/BookList/BookList"
import BookDetails from "./Components/BookDetails/BookDetails"
import "./App.css"
import Contact from './Pages/Contact/Contact'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
