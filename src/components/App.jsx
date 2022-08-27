import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
function App() {
  return (
    <div className="root">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
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
      {/* <div className="popup" id="popup_edit">
        <div className="popup__container">
          <button className="popup__close-button" id="close_edit"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
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
        </div>
      </div>

      <div className="popup" id="popup_add">
        <div className="popup__container">
          <button className="popup__close-button" id="close_add"></button>
          <h2 className="popup__title">Новое место</h2>
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
        </div>
      </div>

      <div className="popup" id="popup_avatar">
        <div className="popup__container popup__container_avatar">
          <button className="popup__close-button" id="close_avatar"></button>
          <h2 className="popup__title">Обновить аватар</h2>
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
        </div>
      </div>

      <div className="popup popup_delete" id="popup_delete">
        <div className="popup__container popup__container_delete">
          <button className="popup__close-button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" id="form_delete" noValidate>
            <button
              type="submit"
              className="popup__submit-button popup__submit-button_delete"
              id="submit_delete"
            >
              Да
            </button>
          </form>
        </div>
      </div> */}

      <PopupWithImage />

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
