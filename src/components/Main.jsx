import { useEffect, useState } from "react";
import api from "../api";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar } = props;
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getUserInfoFromServer().then((data) => {
      setUserName(`${data.name}`);
      setUserDescription(`${data.about}`);
      setUserAvatar(`${data.avatar}`);
    });
  }, []);
  useEffect(() => {
    api.getCards().then((data) => {
      console.log(data);
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
        {cards.map(({ name, likes, link, id }) => (
          <div className="place" key={id}>
            <div className="place__image-container">
              <button className="place__delete-button"></button>
              <img src={link} className="place__image" alt={name} />
            </div>
            <div className="place__info">
              <h2 className="place__name">{name}</h2>
              <div className="place__like-container">
                <button className="place__like-button"></button>
                <p className="place__like-count">{likes.length}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Main;

// about: "Хороший мальчик"
// avatar: "https://cdn.fishki.net/upload/post/201512/11/1771317/tn/cb43e36ba9eea7b2dcd3410d99262de8.jpg"
// cohort: "cohort-47"
// name: "ЖакЖак"
// _id: "b8ccfc62ba05e7b825498188"
