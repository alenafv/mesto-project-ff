const showPopupError = (formSelector, inputSelector, errorMessage, settings) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(settings.inputErrorClass);
    errorElement.textContent  = errorMessage;
    errorElement.classList.add(settings.errorClass);
};

const hidePopupError = (formSelector, inputSelector, settings) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(settings.inputErrorClass);
    errorElement.textContent  = '';
    errorElement.classList.remove(settings.errorClass);
};

const isValid = (formSelector, inputSelector, settings) => {
    if (inputSelector.validity.patternMismatch) {
        inputSelector.setCustomValidity(inputSelector.dataset.errorMessage);
    } else {
        inputSelector.setCustomValidity("");
    }

    if (!inputSelector.validity.valid) {
        showPopupError(formSelector, inputSelector, inputSelector.validationMessage, settings);
    } else {
        hidePopupError(formSelector, inputSelector, settings);
    }
};

const setEventListeners = (formSelector, settings) => {
    const inputList = Array.from(formSelector.querySelectorAll(settings.inputSelector));
    const buttonElement = formSelector.querySelector(settings.submitButtonSelector);
  
    toggleButtonState(inputList, buttonElement, settings.inactiveButtonClass);

    inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input', () => {
        isValid(formSelector, inputSelector, settings);

        toggleButtonState(inputList, buttonElement, settings.inactiveButtonClass);

      });
    });
  };

  const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
  
    formList.forEach((formSelector) => {
        formSelector.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });

      setEventListeners(formSelector, settings);
    });
  };

const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
    })
  };

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(inactiveButtonClass);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(inactiveButtonClass);
    }
  };

const clearValidation = (formSelector, settings) => {
    const inputList = Array.from(formSelector.querySelectorAll(settings.inputSelector));
    const buttonElement = formSelector.querySelector(settings.submitButtonSelector);

    inputList.forEach((inputSelector) => {
        hidePopupError(formSelector, inputSelector, settings);
    });
    toggleButtonState(inputList, buttonElement, settings.inactiveButtonClass);
};

export {enableValidation, clearValidation}