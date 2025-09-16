import "./ItemModal.css";

import closeIcon from "../../assets/close.svg";

function ItemModal({ activeModal, handleCloseClick, card, handleCardDelete }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      handleCloseClick();
    }
  };

  return (
    <div
      className={`modal ${activeModal === "preview" && "modal__opened"}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        >
          <img
            src={closeIcon}
            alt="Close button"
            className="modal__close-btn"
          />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        <button
          onClick={handleCardDelete}
          type="button"
          className="modal__delete-btn"
        >
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
