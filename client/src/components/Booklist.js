import React, { Component } from 'react';

import {graphql} from 'react-apollo';

import {getBooksQuery} from "../Queries/Queries";
import Bookdetails from "./Bookdetails";

class Booklist extends Component {
    constructor(props){
        super(props);
        this.state={
            selected:null
        }
    }
    displayBook(){
        var data = this.props.data
        if(data.loading){
            return <div>loading......</div>
        }else{
            return data.books.map(book => {
                return(
                <li key={book.id} onClick={e => this.setState({selected:book.id})}>{book.name}</li>
                )
            })
        }
      }
    render() {
      
        return (
            <div>
               
                <ul id="book-list">
                    {this.displayBook()}
                </ul>    
                <Bookdetails  bookId={this.state.selected}  />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(Booklist);