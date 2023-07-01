import { Fragment } from "react";

export const BookCard = ({bookData, onBookClick}) => {
    return (
    <div
      onClick={() => {
        onBookClick(bookData);
      }}
    >
      {bookData.title}
    </div>
  );
};