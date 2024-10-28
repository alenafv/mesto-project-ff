// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки

function createCard(cardData, deleteCard, cardLike, openImageModal) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardElement.querySelector('.card__title').textContent = cardData.name;

    const deleteCardButton = cardElement.querySelector('.card__delete-button');
    deleteCardButton.addEventListener('click', deleteCard);

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', cardLike);

    cardImage.addEventListener('click', () => openImageModal(cardData));

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

    export {createCard, deleteCard, cardLike};