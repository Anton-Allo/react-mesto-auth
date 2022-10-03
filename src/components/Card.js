import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {
  //Подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);
  //Проверяем являемся ли мы владельцем карточки
  const isOwn = props.card.owner._id === currentUser._id;
  //Добавляем возможность удалять только свои карточки
  const cardDeleteButtonClassName = `card__trash-button ${
    isOwn ? 'card__trash-button_visible' : 'card__trash-button_hidden'
  }`;
  //Проверяем поставил данный пользователь лайк или нет
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button_active' : ''
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="card">
      <div className="card__image-container">
        <img
          className="card__image"
          src={props.link}
          onClick={handleClick}
          alt={props.name}
        />
        <button
          aria-label="Удалить"
          type="button"
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
        />
      </div>
      <div className="card__container">
        <h2 className="card__title">{props.name}</h2>
        <button
          aria-label="Оценить"
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        />
        <span className="card__counter-likes">{props.likes}</span>
      </div>
    </div>
  );
}

export default Card;
