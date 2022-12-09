import { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [bookItem, setBookItem] = useState();

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let country =
          item.saleInfo.listPrice && item.saleInfo.listPrice.currencyCode;
        let title = item.volumeInfo.title;
        let itemId = item.id;
        if (thumbnail != undefined && amount != undefined) {
          return (
              <section key={itemId} className="section">
                <div
                  className="card"
                  onClick={() => {
                    setShowModal(true);
                    setBookItem(item);
                  }}
                >
                  <img src={thumbnail} alt="" />
                  <div className="bottom">
                    <h3 className="title">{title}</h3>
                    <p className="amount">
                      {country} {amount}
                    </p>
                  </div>
                </div>
                <Modal
                  show={showModal}
                  item={bookItem}
                  onClose={() => setShowModal(false)}
                />
              </section>
          );
        }
      })}
    </>
  );
};

export default Card;
