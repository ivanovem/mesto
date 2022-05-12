const editPopup = document.querySelector(".profile__editBtn");
const closePopup = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const submitPopup=document.querySelector(".popup__submit");
const page = document.querySelector(".page");

function togglePopup(){
    popup.classList.toggle("popup_active");
};

function readData(){
    togglePopup();
    page.style.overflow ='hidden';
    let tempJob=profileJob.textContent;
    let tempName=profileName.textContent;
    inputJob.value=tempJob;
    inputName.value=tempName;
}


editPopup.addEventListener("click", readData);

closePopup.addEventListener("click", togglePopup);


function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей
    let jobInput=inputJob.value;
    let nameInput=inputName.value;
    // Вставьте новые значения с помощью textContent

    profileJob.textContent=jobInput;
    profileName.textContent=nameInput;
    togglePopup();
}

submitPopup.addEventListener("click", formSubmitHandler);