import "./ModalWithForm.css";
import closeBtnDark from "../../assets/close-dark.png";

function ModalWithForm({
  children,
  buttonText = "Save",
  title,
  handleCloseClick,
  isOpen,
  onSubmit,
}) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      handleCloseClick();
    }
  };
  return (
    <div
      className={`modal ${isOpen ? "modal__opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        >
          <img
            src={closeBtnDark}
            alt="Close button (dark)"
            className="modal__close-btn-dark"
          />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
