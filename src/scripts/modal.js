const popup = document.querySelector('.popup');

function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalByEsc);
};

function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalByEsc);
};

function closeModalByEsc(evt) {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (evt.key === 'Escape' && openedPopup) {
        closeModal(openedPopup);
    }    
}

export {openModal, closeModal, closeModalByEsc, popup};