import React from "react";

function Search(props) {
    return (
        <div className="card">
            <h5 className="card-title m-3">Book Search</h5>
            <div className="form-group m-3">
                <input type="search" className="form-control" id="bookSearch" placeholder="Enter Title or Author Here" />
                <button type="submit" className="btn btn-primary my-3 float-right">Search</button>
            </div>
        </div>
    );
}

export default Search;