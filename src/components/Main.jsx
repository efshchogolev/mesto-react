import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfoFromServer()
      .then((data) => {
        setUserName(`${data.name}`);
        setUserDescription(`${data.about}`);
        setUserAvatar(`${data.avatar}`);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    api.getCards().then((data) => {
      setCards(
        data
          .map((item) => ({
            name: item.name,
            likes: item.likes,
            link: item.link,
            id: item._id,
          }))
          .catch((err) => console.log(err))
      );
    });
  }, []);
  return (
    <main>
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
    </main>
  );
}

export default Main;
