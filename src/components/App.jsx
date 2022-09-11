import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import api from "../utils/Api";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

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
  const handleUpdateUser = (data) => {
    api
      .setUserInfo(data)
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
      })
      .then(closeAllPopups())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .getUserInfoFromServer()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
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

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          title="Вы уверены?"
          name="delete"
          buttonText="Да"
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
