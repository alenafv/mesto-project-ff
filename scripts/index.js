// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const addPlaces = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(initialCards, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = initialCards.link;
    cardElement.querySelector('.card__title').textContent = initialCards.name;

    const deleteCardButton = cardElement.querySelector('.card__delete-button');
    deleteCardButton.addEventListener('click', deleteCard);

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
    evt.target.closest('.card').remove();
}
// @todo: Вывести карточки на страницу
function addCards() {
    for (let i = 0; i < initialCards.length; i++) {
        addPlaces.appendChild(createCard(initialCards[i], deleteCard));
    }};

    addCards();
