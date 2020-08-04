import React, { Component } from "react";
import { SavedList, SavedListItem } from "../components/SavedList";
import API from "../utils/API";

class Saved extends Component {
    state = {
        savedBooks: []
    };

    updateSavedList = ()=>{
        API.getSaved()
        .then(res => {
            this.setState({ savedBooks: res.data})
        })
        .catch(err => console.log(err));
    }

    componentDidMount = () => {
        this.setState({ savedBooks: [] })
        this.updateSavedList()
    };

    render() {
        return (
            <div>
                <div className="card mb-3" id="resultsCard">
                    <h5 className="card-title m-3">Saved Books</h5>
                    {!this.state.savedBooks.length ? (
                        <h5 className="text-center">Sorry, there are no saved books!<br /><br /></h5>
                        ) : (
                        <SavedList>
                            {this.state.savedBooks.map(book => {
                                return (
                                    <SavedListItem
                                    key={book._id}
                                    title={book.title}
                                    url={book.url}
                                    authors={book.authors}
                                    description={book.description}
                                    image={book.image}
                                    id={book._id}
                                    updateSavedList={this.updateSavedList} />
                                    );
                                })}
                        </SavedList>
                    )}
                </div>
            </div>
        );
    }
}

export default Saved;