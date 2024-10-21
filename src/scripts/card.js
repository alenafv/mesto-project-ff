import { initialCards } from './cards.js';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const addPlaces = document.querySelector('.places__list');
// @todo: Функция создания карточки

function createCard(initialCards, deleteCard, cardLike) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = initialCards.link;
    cardImage.alt = initialCards.name;
    cardElement.querySelector('.card__title').textContent = initialCards.name;

    const deleteCardButton = cardElement.querySelector('.card__delete-button');
    deleteCardButton.addEventListener('click', deleteCard);

    // const likeButton = document.querySelector('.card__like-button');
    // likeButton.addEventListener('click', cardLike);

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
    evt.target.closest('.card').remove();
}

// функция лайка
// function cardLike() {
//     likeButton.classList.add('.card__like-button_is-active')
    
// }

// @todo: Вывести карточки на страницу
function addCards() {
    for (let i = 0; i < initialCards.length; i++) {
        addPlaces.appendChild(createCard(initialCards[i], deleteCard));
    }};

    export {addPlaces, createCard, deleteCard, addCards};