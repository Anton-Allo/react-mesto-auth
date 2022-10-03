import React from 'react';

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen ? `popup_opened` : ''
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          title="Закрыть"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`popup__form popup__${props.form}`}
          name={props.formName}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button
            className={`popup__submit-button popup__${props.submitBtn}`}
            type="submit"
            title="Сохранить"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
