import './styles/index.css';
import {initialCards} from "./scripts/cards.js";
import { createCard, deleteCard, cardLike } from "./scripts/card.js";
import {openModal, closeModal, popup} from './scripts/modal.js';

const addPlaces = document.querySelector('.places__list');

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
});

const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach(button => {
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

// обработчик формы изменения информации
const formElementEdit = document.querySelector('.popup__form[name="edit-profile"]');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');


function handleFormEditSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    closeModal(popup);
};

formElementEdit.addEventListener('submit', handleFormEditSubmit);

// обработчик формы добавления карточки
const formElementAdd = document.querySelector('.popup__form[name="new-place"]');
const addPopup = document.querySelector('.popup_type_new-card');

function formAddSubmit(evt) {
    evt.preventDefault();

    const cardName = document.querySelector('.popup__input_type_card-name').value;
    const cardLink = document.querySelector('.popup__input_type_url').value;

    const newCard = {
        name: cardName,
        link: cardLink
    };

    addPlaces.prepend(createCard(newCard, deleteCard, cardLike, openImageModal));

    closeModal(addPopup);
    formElementAdd.reset()
}

formElementAdd.addEventListener('submit', formAddSubmit);

// функция открытия модалки с картинкой

const imagePopup = document.querySelector('.popup_type_image');
const imagePopupImage = document.querySelector('.popup__image');
const imagePopupCaption = document.querySelector('.popup__caption');

function openImageModal(cardData) {
    imagePopupImage.src = cardData.link;
    imagePopupImage.alt = cardData.name;
    imagePopupCaption.textContent = cardData.name;

    openModal(imagePopup);
}

// @todo: Вывести карточки на страницу
function addCards() {
    for (let i = 0; i < initialCards.length; i++) {
        addPlaces.appendChild(createCard(initialCards[i], deleteCard, cardLike, openImageModal));
    }};

    addCards();

export {openImageModal};