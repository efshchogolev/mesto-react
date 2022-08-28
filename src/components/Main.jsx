function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar } = props;
  return (
    <>
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img src="" className="profile__avatar" alt="Аватарка" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            className="profile__edit-button"
            onClick={onEditProfile}
          ></button>
          <h2 className="profile__about">Исследователь океана</h2>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements"></section>
    </>
  );
}

export default Main;
