import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyDRnAbx_BxtNDzxXV-vsfkhtVyQgmFA5sk"+"&maxResults=40"
        )
        .then(res=>setBookData(res.data.items))
        .catch(err=>console.log(err));
    }
  };

  return (
    <div>
      <div className="header">
        <div className="row1">
          <h1>
            A room without a book is like
            <br />a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find your book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your book name"
              value={search}
              onChange={e=>setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </div>
  );
};

export default Main;
