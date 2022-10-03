import React from 'react';

function ConfirmPopupDelete(props) {
  return (
    <section className="popup popup_confirm-delete">
      <div className="popup__container">
        <button
          aria-label="Закрыть"
          type="button"
          className="popup__close"
          onClick={props.onClose}
        />
        <h2 className="popup__title popup__title_confirm-delete">
          Вы уверены?
        </h2>
        <button
          type="submit"
          className="popup__submit-button popup__submit-button_confirm-delete"
        >
          Да
        </button>
      </div>
    </section>
  );
}

export default ConfirmPopupDelete;
