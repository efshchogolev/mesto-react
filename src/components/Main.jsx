import { useContext } from "react";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(
          data.map((item) => ({
            name: item.name,
            likes: item.likes,
            link: item.link,
            id: item._id,
            owner: item.owner,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img
            src={`${currentUser.avatar}`}
            className="profile__avatar"
            alt="Аватарка"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit-button"
            onClick={onEditProfile}
          ></button>
          <h2 className="profile__about">{currentUser.about}</h2>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card card={card} onCardClick={onCardClick} key={card.id} />
        ))}
      </section>
    </main>
  );
}

export default Main;
