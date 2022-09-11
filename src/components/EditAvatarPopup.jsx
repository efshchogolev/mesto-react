import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;
  const avatarRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          ref={avatarRef}
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
