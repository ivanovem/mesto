const editPopup = document.querySelector(".profile__editBtn");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup_profile-edit");
const submitPopup=document.querySelector(".popup__submit");
const btnLike = document.querySelector(".element__likeBtn");

const btnAdd = document.querySelector(".profile__addBtn");
const popupAddCard = document.querySelector(".popup_add-card");
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cardWrapper = document.querySelector('.elements');
/*cardWrapper.insertAdjacentHTML('beforeend', 
    `
    <div class="element">
    <img src="${initialCards[0].link}" alt="${initialCards[0].name}" class="element__image">
    <div class="element__sign">
      <h2 class="element__title">${initialCards[0].name}</h2>
      <button type="button" class="element__likeBtn">
         <!--<img src="./images/Like.png" alt="Лайк!">-->
      </button>
    </div>
    `
);*/

const renderCard = (wrap, name, link) =>{

    wrap.insertAdjacentHTML('beforeend', 
    `
    <div class="element">
    <img src="${link}" alt="${name}" class="element__image">
    <div class="element__sign">
      <h2 class="element__title">${name}</h2>
      <button type="button" class="element__likeBtn">
         <!--<img src="./images/Like.png" alt="Лайк!">-->
      </button>
    </div>
    `
);
}

initialCards.forEach(element => {
    renderCard(cardWrapper, element.name, element.link);
});



let inputJob=document.querySelector(".popup__input-job");
let inputName=document.querySelector(".popup__input-name");
let profileJob=document.querySelector(".profile__job");
let profileName=document.querySelector(".profile__name");

function openPopupAddCard(){
    popupAddCard.classList.add('popup_opened');
};

btnAdd.addEventListener("click",openPopupAddCard);












function like(){
    btnLike.classList.toggle("element__likeBtn_active");  
};

btnLike.addEventListener("click", like);

function openPopupEdit(){
    btnAdd.classList.add("popup_opened");
};
function openPopup(){
    popup.classList.add("popup_opened");
    inputJob.value=profileJob.textContent;
    inputName.value=profileName.textContent;  
};

function closePopup(){
    popup.classList.remove("popup_opened");
};

editPopup.addEventListener("click", openPopup);

popupClose.addEventListener("click", closePopup);


function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    profileJob.textContent=inputJob.value; 
    profileName.textContent=inputName.value;  
    closePopup();    
}

submitPopup.addEventListener("click", formSubmitHandler);

