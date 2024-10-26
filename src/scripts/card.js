import { initialCards } from './cards.js';
import { openModal } from './modal.js';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const addPlaces = document.querySelector('.places__list');
// @todo: Функция создания карточки

function createCard(initialCards, deleteCard, cardLike, imageModal) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = initialCards.link;
    cardImage.alt = initialCards.name;
    cardElement.querySelector('.card__title').textContent = initialCards.name;

    const deleteCardButton = cardElement.querySelector('.card__delete-button');
    deleteCardButton.addEventListener('click', deleteCard);

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', cardLike);

    cardImage.addEventListener('click', () => imageModal(initialCards));

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
    evt.target.closest('.card').remove();
}

// функция лайка
function cardLike(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
}

// функция открытия модалки с картинкой

const imagePopup = document.querySelector('.popup_type_image');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');

function imageModal(cardData) {
    imagePopupImage.src = cardData.link;
    imagePopupImage.alt = cardData.name;
    imagePopupCaption.textContent = cardData.name;

    openModal(imagePopup);
}

// @todo: Вывести карточки на страницу
function addCards() {
    for (let i = 0; i < initialCards.length; i++) {
        addPlaces.appendChild(createCard(initialCards[i], deleteCard, cardLike, imageModal));
    }};

    export {addPlaces, createCard, deleteCard, addCards, cardLike, imageModal};