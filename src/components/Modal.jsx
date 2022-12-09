import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  let title = item.volumeInfo.title;
  let authors = item.volumeInfo.authors;
  let publisher = item.volumeInfo.publisher;
  let publishedDate = item.volumeInfo.publishedDate;
  let description = item.volumeInfo.description;
  let previewLink = item.volumeInfo.previewLink;
  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close" onClick={onClose}>
          <FontAwesomeIcon icon="times" />
        </button>
        <div className="inner-box">
          <img src={thumbnail} alt="" />
          <div className="info">
            <h1>{title}</h1>
            <h3>{authors}</h3>
            <br />
            <h4>
              {publisher} <span>{publishedDate}</span>
            </h4>
            <br />
            <a href={previewLink}>
              <button>More</button>
            </a>
          </div>
        </div>
        <h4 className="description">{description}</h4>
      </div>
    </div>
  );
};

export default Modal;
