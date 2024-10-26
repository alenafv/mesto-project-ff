import './styles/index.css';
import { addPlaces, createCard, deleteCard, addCards, cardLike, imageModal } from "./scripts/card.js";
import {openModal, closeModal, closeModalByEsc, popup} from './scripts/modal.js';

addCards();

// открытие и закрытие edit-popup и new-card-popup по кнопке

const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_new-card');

editButton.addEventListener('click', function() {
    openModal(popupEdit);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
});

addButton.addEventListener('click', function() {
    openModal(popupAdd);
    formElementAdd.addEventListener('submit', formSubmit);
});

const closeButton = document.querySelectorAll('.popup__close');
closeButton.forEach(button => {
    button.addEventListener('click', function() {
        closeModal(this.closest('.popup'));
    })
});

// закрытие edit-popup и new-card-popup по оверлею

const popups = document.querySelectorAll('.popup');
popups.forEach(popup => {
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closeModal(this.closest('.popup'));
        }
        });
    });

// закрытие edit-popup и new-card-popup по Esc

document.addEventListener('keydown', closeModalByEsc);

// обработчик формы изменения информации
const formElementEdit = document.querySelector('.popup__form[name="edit-profile"]');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');


function handleFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    closeModal(popup);
};

formElementEdit.addEventListener('submit', handleFormSubmit);


// обработчик формы добавления карточки
const formElementAdd = document.querySelector('.popup__form[name="new-place"]');
const addPopup = document.querySelector('.popup_type_new-card');

function formSubmit(evt) {
    evt.preventDefault();

    const cardName = document.querySelector('.popup__input_type_card-name').value;
    const cardLink = document.querySelector('.popup__input_type_url').value;

    const newCard = {
        name: cardName,
        link: cardLink
    };

    addPlaces.prepend(createCard(newCard, deleteCard, cardLike, imageModal));

    closeModal(addPopup);
    formElementAdd.reset()
}