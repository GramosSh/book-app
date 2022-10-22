import React, { useState,useEffect } from 'react'
import './App.css'
import {getBooksAPI, addBookAPI, updateBookAPI, deleteBookAPI} from './apis/books'
import TableBook from './Components/TableBook';
import CreateBook from './Components/CreateBook'; 

function App() {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooksAPI().then(books => setBooks(books));
  },[])
 

 const addBook = (book) =>{
  return addBookAPI(book)
  .then (data =>{
      setBooks([...books, data])   
  })

 }

 const updateBook = (book) =>{
  return updateBookAPI (book)
  .then(data =>{
    return data;
  })
 }


 const deleteBook = (id) =>{
  return deleteBookAPI (id)
  .then(data => {
    if(data.deletedCount === 1){
      setBooks(books.filter(book => book._id !==id));
    }
  })
 }



  return (
    <div className="App">
      <CreateBook onCreate ={addBook}/>
      <TableBook books={books} onDelete={deleteBook} onUpdate={updateBook}/>
    </div>
  );
}
 
export default App
