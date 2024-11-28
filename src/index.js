import './styles/index.css';
import { fetchAbout, updateUserProfile, fetchCards, likeCard, deleteCard, fetchNewCard, fetchAvatar } from './scripts/api.js';
import { enableValidation, clearValidation } from './scripts/validation.js';
import { createCard } from "./scripts/card.js";
import { openModal, closeModal } from './scripts/modal.js';

const addPlaces = document.querySelector('.places__list');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

enableValidation(validationConfig);

let userId;

// функция лайка

function handleLikeCard(cardId, likeButton, likeCount) {
    const isLiked = likeButton.classList.contains('card__like-button_is-active');

    likeCard(cardId, isLiked)
        .then((data) => {
            likeButton.classList.toggle('card__like-button_is-active');
            likeCount.textContent = data.likes.length;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// функция удаления карточки

function handleDeleteCard(cardId, cardElement) {
    openDeletePopup(cardId, cardElement);
}

Promise.all([fetchAbout(), fetchCards()])
    .then(([user, cards]) => {
        userId = user._id;

        profileTitle.textContent = user.name;
        profileDescription.textContent = user.about;

        cards.forEach((card) => {
            const cardElement = createCard(card, handleDeleteCard, handleLikeCard, openImageModal, userId);
            addPlaces.append(cardElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

// обработчики попапа редактирования аватара
const popupAvatar = document.querySelector('.popup_type_avatar');
const avatarEditButton = document.querySelector('.profile__avatar');

avatarEditButton.addEventListener('click', function () {
    openModal(popupAvatar);
    clearValidation(popupAvatar, validationConfig);
})

const formSelectorAvatar = document.querySelector('.popup__form[name="avatar"]');
const profileAvatar = document.querySelector('.profile__image');

function formAvatarSubmit(evt) {
    evt.preventDefault();
    formSelectorAvatar.querySelector('.popup__button').textContent = 'Сохранение...';

    const avatarLink = document.querySelector('.popup__input_type_avatar-link').value;

    fetchAvatar(avatarLink)
        .then((data) => {
            profileAvatar.style.backgroundImage = `url('${data.avatar}')`;
            closeModal(popupAvatar);
            formSelectorAvatar.reset();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            formSelectorAvatar.querySelector('.popup__button').textContent = 'Сохранить';
        })
}

formSelectorAvatar.addEventListener('submit', formAvatarSubmit)

// открытие и закрытие edit-popup и new-card-popup по кнопке

const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_new-card');

editButton.addEventListener('click', function () {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;

    openModal(popupEdit);
    clearValidation(popupEdit, validationConfig);
});

addButton.addEventListener('click', function () {
    openModal(popupAdd);
    clearValidation(popupAdd, validationConfig);
});

const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        closeModal(this.closest('.popup'));
    })
});

// закрытие edit-popup и new-card-popup по оверлею

const popups = document.querySelectorAll('.popup');
popups.forEach(popup => {
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            closeModal(this.closest('.popup'));
        }
    });
});

// обработчик формы изменения информации
const formSelectorEdit = document.querySelector('.popup__form[name="edit-profile"]');

function formEditSubmit(evt) {
    evt.preventDefault();
    formSelectorEdit.querySelector('.popup__button').textContent = 'Сохранение...';

    updateUserProfile(nameInput.value, jobInput.value)
        .then(({ name, about }) => {
            profileTitle.textContent = name;
            profileDescription.textContent = about;
            closeModal(popupEdit);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            formSelectorEdit.querySelector('.popup__button').textContent = 'Сохранить';
        })
}

formSelectorEdit.addEventListener('submit', formEditSubmit);

// обработчик формы добавления карточки
const formSelectorAdd = document.querySelector('.popup__form[name="new-place"]');

function formAddSubmit(evt) {
    evt.preventDefault();
    formSelectorAdd.querySelector('.popup__button').textContent = 'Сохранение...';

    const cardName = document.querySelector('.popup__input_type_card-name').value;
    const cardLink = document.querySelector('.popup__input_type_url').value;

    fetchNewCard(cardName, cardLink)
        .then((newCard) => {
            const cardElement = createCard(newCard, handleDeleteCard, handleLikeCard, openImageModal, userId);
            addPlaces.prepend(cardElement);
            closeModal(popupAdd);
            formSelectorAdd.reset();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            formSelectorAdd.querySelector('.popup__button').textContent = 'Сохранить';
        })
}

formSelectorAdd.addEventListener('submit', formAddSubmit);

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

//функция открытия модалки для подтверждения удаления карточки
const popupConfirm = document.querySelector('.popup_type_confirm');
let cardToDelete = null;
let cardIdToDelete = null;

function openDeletePopup(cardId, cardElement) {
    cardToDelete = cardElement;
    cardIdToDelete = cardId;
    openModal(popupConfirm);
}

const confirmButton = document.querySelector('.popup__button_type_confirm');
confirmButton.addEventListener('click', () => {
    if (cardToDelete && cardIdToDelete) {
        deleteCard(cardIdToDelete)
            .then(() => {
                cardToDelete.remove();
                closeModal(popupConfirm);
            })
            .catch((err) => {
                console.log(err);
            });
    }
});

export { openImageModal };