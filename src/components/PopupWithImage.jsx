function PopupWithImage() {
  return (
    <div className="popup" id="popup_place">
      <div className="popup__place-container">
        <img
          src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
          className="popup__place-image"
          alt="Архыз"
        />
        <button className="popup__close-button"></button>
        <h2 className="popup__place-name">Архыз</h2>
      </div>
    </div>
  );
}

export default PopupWithImage;
