import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";

function App() {
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleCloseAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  };
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={handleCloseAllPopups}
        children={
          <form className="popup__form" id="form_edit" noValidate>
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
            <button
              type="submit"
              className="popup__submit-button popup__submit-button_edit"
              id="submit_edit"
            >
              Сохранить
            </button>
          </form>
        }
      />
      <PopupWithForm
        title="Новое место"
        name="add"
        onClose={handleCloseAllPopups}
        isOpen={isAddPlacePopupOpen}
        children={
          <form className="popup__form" id="form_add" noValidate>
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
            <button
              type="submit"
              className="popup__submit-button popup__submit-button_add"
              id="submit_add"
            >
              Создать
            </button>
          </form>
        }
      />

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={handleCloseAllPopups}
        children={
          <form className="popup__form" id="form_avatar" noValidate>
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
            <button
              type="submit"
              className="popup__submit-button popup__submit-button_avatar"
              id="submit_avatar"
            >
              Сохранить
            </button>
          </form>
        }
      />

      <PopupWithForm
        title="Вы уверены?"
        name="delete"
        children={
          <form className="popup__form" id="form_delete" noValidate>
            <button
              type="submit"
              className="popup__submit-button popup__submit-button_delete"
              id="submit_delete"
            >
              Да
            </button>
          </form>
        }
      />
      <PopupWithImage />
    </div>
  );
}

export default App;
