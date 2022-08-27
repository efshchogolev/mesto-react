function PopupWithForm(props) {
  const { title, name, children } = props;
  return (
    <div className="popup" id={`popup_${name}`}>
      <div className="popup__container">
        <button className="popup__close-button" id="close_edit"></button>
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
export default PopupWithForm;
