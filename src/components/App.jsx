import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

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
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
    setIsDeletePopupOpen(false);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  return (
    <div className="root">
      <Header />
      <Main
        onCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
      <PopupWithForm
        title="Новое место"
        name="add"
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
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

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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

      <PopupWithForm
        title="Вы уверены?"
        name="delete"
        buttonText="Да"
        onClose={closeAllPopups}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
