import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { onClose, isOpen } = props;
  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      onClose={onClose}
      isOpen={isOpen}
      buttonText="Создать"
    >
      <label className="popup__label">
        <input
          type="text"
          className="popup__input popup__input_place "
          placeholder="Название"
          name="name"
          id="place-name"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__error-message place-name-error"></span>
      </label>
      <label className="popup__label">
        <input
          type="url"
          className="popup__input popup__input_link "
          placeholder="Ссылка на картинку"
          name="link"
          id="place-url"
          required
        />
        <span className="popup__error-message place-url-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
