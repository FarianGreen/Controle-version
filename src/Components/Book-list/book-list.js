import React from 'react';
import BookListItem from '../Book-list-item'
import './book-list.css';
import { connect } from 'react-redux';
import { withBookstoreService } from '../Hoc';
import {booksLoaded} from '../../Actions'
import {compose} from '../../utils'
import Spinner from '../Spiner'

class BookList extends React.Component{

    componentDidMount() {
        const { bookstoreService, booksLoaded } = this.props;
        bookstoreService.getBooks()
                            .then((data) => booksLoaded(data));
      }
    
    render() {
        const {books, loading }= this.props;
        if (loading) {
            return <Spinner />;
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

const mapStateToProps = ({ books,loading }) => {
    return { books,loading };
  };

const mapDispatchToProps = {
    booksLoaded 
};

export default compose(withBookstoreService(),
        connect(mapStateToProps, mapDispatchToProps))(BookList);