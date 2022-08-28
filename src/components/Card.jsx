function Card(props) {
  const { card, onCardClick } = props;
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="place" key={card.id}>
      <div className="place__image-container">
        <button className="place__delete-button"></button>
        <img
          src={card.link}
          className="place__image"
          alt={card.name}
          onClick={handleClick}
        />
      </div>
      <div className="place__info">
        <h2 className="place__name">{card.name}</h2>
        <div className="place__like-container">
          <button className="place__like-button"></button>
          <p className="place__like-count">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
