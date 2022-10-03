'use strict';

function ImagePopup(props) {
  return (
    <section
      className={`popup popup_open-image ${props.card ? 'popup_opened' : ''}`}
    >
      <figure className="popup__image-container">
        <button
          aria-label="Выход"
          type="button"
          className="popup__close"
          onClick={props.onClose}
        />
        <img
          src={props.card ? props.card.link : ''}
          className="popup__view-image"
          alt={props.card ? props.card.name : ''}
        />
        <figcaption className="popup__title-image">
          {props.card ? props.card.name : ''}
        </figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
