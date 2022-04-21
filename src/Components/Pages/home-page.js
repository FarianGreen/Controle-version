import React from 'react';
import BookList from '../Book-list'

const HomePage =()=> {
   const books = [
      {id:1, title:"Fourth Way", author: "Uspenskiy P.D"},
      {id:2, title:"In search of the miraculous", author: "Uspenskiy P.D"}
    ];
 return (
   <BookList books={books}/>
 )
}

export default HomePage;