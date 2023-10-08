import './Popup.css';

const Popup = ({ text, isOpen, onClose }) => {
  const handleCloseButtonClick = () => {
    onClose();
  };

  // Закрытие кликом по оверлею
  const handleCloseByOverlayClick = () => {
    onClose();
  };

  // Обработчик клика по контейнеру
  const handlePopupContainerClick = (evt) => {
    evt.stopPropagation();
  };

  return (
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`} onClick={handleCloseByOverlayClick}>
      <div className='popup__container' onClick={handlePopupContainerClick}>
        <p className='popup__text'>{text}</p>
        <button className='popup__close link' type='button' onClick={handleCloseButtonClick} />
      </div>
    </section>
  );
};

export default Popup;