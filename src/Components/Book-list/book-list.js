import React from 'react';
import BookListItem from '../Book-list-item'
import './book-list.css';
import { connect } from 'react-redux';
import { withBookstoreService } from '../Hoc';
import {booksLoaded} from '../../Actions'
import {compose} from '../../utils'

class BookList extends React.Component{

    componentDidMount(){
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
  
    this.props.booksLoaded(data);    
    }
    
    render() {
        const {books}= this.props;
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

const mapStateToProps = ({ books }) => {
    return { books };
  };

const mapDispatchToProps = {
    booksLoaded 
};

export default compose(withBookstoreService(),
        connect(mapStateToProps, mapDispatchToProps))(BookList);