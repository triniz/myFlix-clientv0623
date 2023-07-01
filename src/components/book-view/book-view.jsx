import { Fragment } from "react";

export const BookView = ({ bookData, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={bookData.image} />
        </div>
        <div>
          <span>Title: </span>
          <span>{bookData.title}</span>
        </div>
        <div>
          <span>Author: </span>
          <span>{bookData.author}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
      </div>
    );
  };