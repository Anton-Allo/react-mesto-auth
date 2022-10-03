import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleAddName(e) {
    setName(e.target.value);
  }

  function handleAddLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: name,
      link: link,
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={'add-button'}
      title={'Новое место'}
      form={'add-form'}
      formName={'form-add-card'}
      submitBtn={'create-form-buttonn'}
      buttonText={'Создать'}
      onSubmit={handleSubmit}
    >
      <input
        value={name}
        onChange={handleAddName}
        type="text"
        placeholder="Название"
        name="cardTitle"
        className="popup__input-form popup__input-form-location"
        minLength={2}
        maxLength={30}
        required
        id="inputLocation"
      />
      <span className="popup__input-error inputLocation-error">
        Вы пропустили это поле.
      </span>
      <input
        value={link}
        onChange={handleAddLink}
        type="url"
        placeholder="Ссылка на картинку"
        name="cardLink"
        className="popup__input-form popup__input-form-link"
        required
        id="inputLinkImage"
      />
      <span className="popup__input-error inputLinkImage-error">
        Вы пропустили это поле.
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
