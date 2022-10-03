import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value);
  }

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={'avatar-edit'}
      title={'Обновить аватар'}
      form={'avatar-form'}
      formName={'addAvatar'}
      submitBtn={'save-form-button'}
      buttonText={'Сохранить'}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        id="avatarUrl-input"
        className="popup__input-form popup__input-form_avatar-url"
        required
        placeholder="Ссылка на картинку"
        type="url"
        name="avatarUrl"
      />
      <span className="avatarUrl-input-error popup__input-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
