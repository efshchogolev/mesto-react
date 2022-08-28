function PopupWithForm(props) {
  const { title, name, children, isOpen, onClose } = props;
  const className = `${isOpen ? "popup_isOpen" : ""}`;
  return (
    <div className={`popup ${className}`} id={`popup_${name}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          id="close_edit"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
export default PopupWithForm;
