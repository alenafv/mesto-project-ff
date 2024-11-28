// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки

function createCard(cardData, handleDeleteCard, handleLikeCard, openImageModal, userId) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardElement.querySelector('.card__title').textContent = cardData.name;

    const deleteCardButton = cardElement.querySelector('.card__delete-button');
    if (cardData.owner && cardData.owner._id === userId) {
        deleteCardButton.addEventListener('click', () => handleDeleteCard(cardData._id, cardElement)
        );
    } else {
        deleteCardButton.remove();
    }

    const likeButton = cardElement.querySelector('.card__like-button');
    const likeCount = cardElement.querySelector('.card__likes-count');
    likeCount.textContent = cardData.likes.length || 0;

    if (cardData.likes.some((like) => like._id === userId)) {
        likeButton.classList.add('card__like-button_is-active');
    }

    likeButton.addEventListener('click', (evt) => {
        handleLikeCard(cardData._id, likeButton, likeCount);
        evt.target.blur();
    });

    cardImage.addEventListener('click', () => openImageModal(cardData));

    return cardElement;
}

export { createCard };