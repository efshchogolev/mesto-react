import { useEffect, useState } from "react";
import Api from "../api";
import Card from "./Card";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  const api = new Api(
    "https://mesto.nomoreparties.co/v1/cohort-47",
    "ad5a4fe9-6249-4900-9757-39fd298866ec"
  );
  useEffect(() => {
    api.getUserInfoFromServer().then((data) => {
      setUserName(`${data.name}`);
      setUserDescription(`${data.about}`);
      setUserAvatar(`${data.avatar}`);
    });
  }, []);
  useEffect(() => {
    api.getCards().then((data) => {
      setCards(
        data.map((item) => ({
          name: item.name,
          likes: item.likes,
          link: item.link,
          id: item._id,
        }))
      );
    });
  }, []);
  return (
    <>
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img
            src={`${userAvatar}`}
            className="profile__avatar"
            alt="Аватарка"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            onClick={onEditProfile}
          ></button>
          <h2 className="profile__about">{userDescription}</h2>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </>
  );
}

export default Main;
