import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={'edit-profile-info'}
      title={'Редактировать профиль'}
      form={'edit-form'}
      formName={'form-edit_profile-info'}
      submitBtn={'save-form-button'}
      buttonText={'Сохранить'}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Ваше имя"
        name="name"
        className="popup__input-form popup__input-form-name"
        minLength={2}
        maxLength={40}
        required
        id="inputNameProfile"
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className="popup__input-error inputNameProfile-error">
        Вы пропустили это поле.
      </span>
      <input
        type="text"
        placeholder="О себе"
        name="about"
        className="popup__input-form popup__input-form-occupation"
        minLength={2}
        maxLength={200}
        required
        id="inputOccupationProfile"
        value={description || ''}
        onChange={handleChangeDescription}
      />
      <span className="popup__input-error inputOccupationProfile-error">
        Вы пропустили это поле.
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
