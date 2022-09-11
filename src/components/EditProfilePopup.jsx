import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
    >
      <label className="popup__label">
        <input
          type="text"
          className="popup__input popup__input_name"
          name="name"
          placeholder="Ваше имя"
          id="name"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__error-message name-error"></span>
      </label>
      <label className="popup__label">
        <input
          type="text"
          name="about"
          className="popup__input popup__input_about "
          placeholder="Расскажите о себе"
          id="about"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error-message about-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
