import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { onClose, isOpen, onAddCard } = props;
  function handleSubmit(e) {
    e.preventDefault();

    onAddCard({
      name: placeName,
      link: link,
    });
  }
  const [placeName, setPlaceName] = useState("");
  const [link, setLink] = useState("");
  function handleNameChange(e) {
    setPlaceName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      onClose={onClose}
      isOpen={isOpen}
      buttonText="Создать"
      onSubmit={handleSubmit}
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
          value={placeName}
          onChange={handleNameChange}
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
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__error-message place-url-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
