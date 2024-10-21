import { closeModal, popup } from "./modal";
// Находим форму в DOM
const formElementEdit = document.querySelector('.popup__form[name="edit-profile"]'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name');  // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('.popup__input_type_description');  // Воспользуйтесь инструментом .querySelector()
// Получите значение полей jobInput и nameInput из свойства value

// Выберите элементы, куда должны быть вставлены значения полей
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault();

    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    closeModal(popup);
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementEdit.addEventListener('submit', handleFormSubmit);

export { nameInput, jobInput, profileTitle, profileDescription};
