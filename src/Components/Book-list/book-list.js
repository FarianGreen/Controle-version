import React from 'react';
import BookListItem from '../Book-list-item'
import './book-list.css';
import { connect } from 'react-redux';
import { withBookstoreService } from '../Hoc';
import {booksLoaded,booksRequested,booksError} from '../../Actions'
import {compose} from '../../utils'
import Spinner from '../Spiner'
import ErrorIndicator from '../Error-indicator'

class BookList extends React.Component{

    componentDidMount() {
    this.props.fetchBooks()
      }
    
    render() {
        const {books, loading, error }= this.props;
        if (loading) {
            return <Spinner />;
          }
        
        if (error) {
            return <ErrorIndicator />;
          }
        return (
            <ul className="book-list">
                {
                    books.map((book) =>{
                        return(
                            <li key={book.id}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ books,loading, error}) => {
    return { books,loading, error };
  };

const mapDispatchToProps =(dispatch, ownProps) => {
    const { bookstoreService } = ownProps
    return{
        fetchBooks: ()=>{
            dispatch(booksRequested());
            bookstoreService.getBooks()
                .then((data) => dispatch (booksLoaded(data)))
                .catch((error) => dispatch (booksError(error)))
        }
    }
};

export default compose(withBookstoreService(),
        connect(mapStateToProps, mapDispatchToProps))(BookList);