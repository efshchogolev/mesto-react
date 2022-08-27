import logoPath from "./images/logo.svg";

function App() {
  return (
    <div className="root">
      <header className="header">
        <img src={logoPath} className="header__logo" alt="Логотип Mesto" />
      </header>
      <section className="profile">
        <div className="profile__avatar-container">
          <img src="" className="profile__avatar" alt="Аватарка" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__edit-button"></button>
          <h2 className="profile__about">Исследователь океана</h2>
        </div>
        <button className="profile__add-button"></button>
      </section>
      <section className="elements"></section>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>

      <div className="popup" id="popup_edit">
        <div className="popup__container">
          <button className="popup__close-button" id="close_edit"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" id="form_edit" novalidate>
            <label className="popup__label">
              <input
                type="text"
                className="popup__input popup__input_name"
                name="name"
                placeholder="Ваше имя"
                id="name"
                required
                minlength="2"
                maxlength="40"
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
                minlength="2"
                maxlength="200"
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
        </div>
      </div>

      <div className="popup" id="popup_add">
        <div className="popup__container">
          <button className="popup__close-button" id="close_add"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" id="form_add" novalidate>
            <label className="popup__label">
              <input
                type="text"
                className="popup__input popup__input_place "
                placeholder="Название"
                name="name"
                id="place-name"
                required
                minlength="2"
                maxlength="30"
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
        </div>
      </div>

      <div className="popup" id="popup_avatar">
        <div className="popup__container popup__container_avatar">
          <button className="popup__close-button" id="close_avatar"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" id="form_avatar" novalidate>
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
        </div>
      </div>

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

      <div className="popup popup_delete" id="popup_delete">
        <div className="popup__container popup__container_delete">
          <button className="popup__close-button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" id="form_delete" novalidate>
            <button
              type="submit"
              className="popup__submit-button popup__submit-button_delete"
              id="submit_delete"
            >
              Да
            </button>
          </form>
        </div>
      </div>

      <template className="place-template">
        <div className="place">
          <div className="place__image-container">
            <button className="place__delete-button"></button>
            <img
              src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
              className="place__image"
              alt="Архыз"
            />
          </div>
          <div className="place__info">
            <h2 className="place__name"></h2>
            <div className="place__like-container">
              <button className="place__like-button"></button>
              <p className="place__like-count"></p>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
