const editPopup = document.querySelector(".profile__editBtn");
const closePopup = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const submitPopup=document.querySelector(".popup__submit");
let inputJob=document.querySelector(".popup__input-job");
let inputName=document.querySelector(".popup__input-name");
let profileJob=document.querySelector(".profile__job");
let profileName=document.querySelector(".profile__name");

function open_Popup(){
    popup.classList.add("popup_opened");
    inputJob.value=profileJob.textContent;
    inputName.value=profileName.textContent;    
    
};

function close_Popup(){
    popup.classList.remove("popup_opened");
};

editPopup.addEventListener("click", open_Popup);

closePopup.addEventListener("click", close_Popup);


function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent

    profileJob.textContent=inputJob.value;
    profileName.textContent=inputName.value;
    close_Popup();
}

submitPopup.addEventListener("click", formSubmitHandler);