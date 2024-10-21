import { addPlaces, createCard, deleteCard } from "./card";
import { closeModal, popup } from "./modal";

const formElementAdd = document.querySelector('.popup__form[name="new-place"]');

function formSubmit(evt) {
    evt.preventDefault();

    const cardName = document.querySelector('.popup__input_type_card-name').value;
    const cardLink = document.querySelector('.popup__input_type_url').value;

    const newCard = {
        name: cardName,
        link: cardLink
    };

    addPlaces.prepend(createCard(newCard, deleteCard));

    closeModal(popup);
}

formElementAdd.addEventListener('submit', formSubmit);



