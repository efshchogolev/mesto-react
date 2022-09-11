import { useContext, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useEffect } from "react";

function EditAvatarPopup(props) {
  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
    >
      <label className="popup__label">
        <input
          type="url"
          className="popup__input popup__input_avatar"
          placeholder="Ссылка на картинку"
          name="link"
          id="avatar-url"
          required
        />
        <span className="popup__error-message avatar-url-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
