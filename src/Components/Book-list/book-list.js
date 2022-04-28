import React from 'react';
import BookListItem from '../Book-list-item'
import './book-list.css';
import { connect } from 'react-redux';
import { withBookstoreService } from '../Hoc';
import {fetchBooks, bookAddedToCart} from '../../Actions'
import {compose} from '../../utils'
import Spinner from '../Spiner'
import ErrorIndicator from '../Error-indicator'


const BookList = ({books, onAddedToCart})=>{
    return (
        <ul className="book-list">
            {
                books.map((book) =>{
                    return(
                        <li key={book.id}>
                        <BookListItem book={book}
                        onAddedToCart={()=>onAddedToCart(book.id)}/></li>
                    )
                })
            }
        </ul>
    )
}

class BookListConatiner extends React.Component{

    componentDidMount() {
    this.props.fetchBooks()
      }
    
    render() {
        const {books, loading, error, onAddedToCart }= this.props;
        if (loading) {
            return <Spinner />;
          }
        
        if (error) {
            return <ErrorIndicator />;
          }
        
        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}



const mapStateToProps = ({bookList:{ books, loading, error}}) => {
    return { books,loading, error };
  };

const mapDispatchToProps =(dispatch, { bookstoreService }) => {
    return{
        fetchBooks: fetchBooks(bookstoreService,dispatch),
        onAddedToCart: (id)=> dispatch(bookAddedToCart(id)) 
    }
};

export default compose(withBookstoreService(),
        connect(mapStateToProps, mapDispatchToProps))(BookListConatiner);