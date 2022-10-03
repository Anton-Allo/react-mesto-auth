import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../index.css';
import buttonAdd from '../images/button_add.svg';
import Card from './Card';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__disk" onClick={props.onEditAvatar}>
          <img
            src={currentUser.avatar}
            alt="Аватар"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            aria-label="Редактировать"
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          />
          <p className="profile__occupation">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        >
          <img src={buttonAdd} alt="Добавить" className="profile__add-icon" />
        </button>
      </section>

      <section className="cards">
        {props.cards.map((card) => (
          <Card
            key={card['_id']}
            card={card}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
