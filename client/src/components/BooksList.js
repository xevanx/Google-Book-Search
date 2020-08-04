import React from "react";
import API from "../utils/API";

export function BooksList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function saveBook(title, authors, description, image, url) {
    let newSave = {
        title: title.toString(),
        authors: authors.toString(),
        description: description.toString(),
        image: image.toString(),
        url: url.toString()
    };

    API
    .saveBook(newSave)
    .catch(err => console.log(err))
};

export function BooksListItem({
    authors,
    description,
    image,
    url,
    title
}) {
    return (
        <li className="list-group-item mt-0 mb-2 mx-2">
            <div className="row">
                <div className="col-sm-2 text-center">
                    <img alt="" src={image} />
                </div>
                <div className="col">
                    <h3>{title}</h3>
                    <h5>{authors}</h5>
                    <p>{description}</p>
                </div>
                <div className="col-sm-2 text-center">
                    <a href={url} className="btn btn-primary text-white mb-2" target="_blank" rel="noopener noreferrer">Check It Out</a>
                    <button type="button" className="btn btn-primary saveBtn" onClick={() => saveBook(title, authors, description, image, url)}>Save Book</button>
                </div>
            </div>
        </li>
    );
}