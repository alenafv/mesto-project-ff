import './styles/index.css';
import {createCard, deleteCard, addCards} from './scripts/card.js';
import {openModal, closeModal, closeModalByEsc, popup} from './scripts/modal.js';
import {nameInput, jobInput, profileTitle, profileDescription} from './scripts/editForm.js';

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
    openModal(popupAdd)
});

const closeButton = document.querySelectorAll('.popup__close');
closeButton.forEach(button => {
    button.addEventListener('click', function() {
        closeModal(this.closest('.popup'));
    })
});

// открытие и закрытие edit-popup и new-card-popup по оверлею

const popups = document.querySelectorAll('.popup');
popups.forEach(popup => {
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closeModal(this.closest('.popup'));
        }
        });
    });

// открытие и закрытие edit-popup и new-card-popup по Esc

document.addEventListener('keydown', closeModalByEsc);
