function Main() {
  const handleEditAvatarClick = () => {
    document.querySelector("#popup_avatar").classList.add("popup_isOpen");
  };
  const handleEditProfileClick = () => {
    document.querySelector("#popup_edit").classList.add("popup_isOpen");
  };
  const handleAddPlaceClick = () => {
    document.querySelector("#popup_add").classList.add("popup_isOpen");
  };
  return (
    <>
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={handleEditAvatarClick}
        >
          <img src="" className="profile__avatar" alt="Аватарка" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            className="profile__edit-button"
            onClick={handleEditProfileClick}
          ></button>
          <h2 className="profile__about">Исследователь океана</h2>
        </div>
        <button
          className="profile__add-button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements"></section>
    </>
  );
}

export default Main;
