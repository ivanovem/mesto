const settings = {formElement: '.popup',
inputElement: '.popup__input',
buttonElement: '.popup__button',
inactiveButtonClass: 'popup__submit_inactive',
inputErrorClass: 'popup__input_type_error',
errorClass: 'popup__input-error_active'}

const formObjectsArray = Array.from(document.querySelectorAll('.popup')).map(formElement=>{
  return{
    formElement,
    formInputList: formElement.querySelectorAll(settings.inputElement),
    buttonElement: settings.buttonElement,
    inactiveButtonClass: settings.buttonElement,
    inputErrorClass: settings.inputErrorClass,
    errorClass: settings.errorClass
  };
})

function showInputError ({formElement, inputErrorClass, errorClass}, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

function hideInputError ({formElement, inputErrorClass, errorClass}, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  })
}; 

const toggleButtonState = (inputList, buttonElement) => {
  if (buttonElement!=undefined){
      if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(settings.inactiveButtonClass);
      } else {
          buttonElement.removeAttribute('disabled');  
          buttonElement.classList.remove(settings.inactiveButtonClass);    
        }
  }
};

const isValid = (formObject, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formObject, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formObject, inputElement);
  }
};

const setEventListeners = (formObject) => {
  const currentButtonElement = formObject.formElement.buttonElement;
  const inputList = Array.from(formObject.formInputList);
  if (currentButtonElement!=null){
  toggleButtonState(inputList, currentButtonElement);
  }
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formObject, inputElement);
      toggleButtonState(inputList, currentButtonElement);
    });
  });
} 

const enableValidation = (_formObjectsArray) => {

  _formObjectsArray.forEach((formObject) => {
    formObject.formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formObject);
  });
}
enableValidation(formObjectsArray);
