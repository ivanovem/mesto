const editPopup = document.querySelector(".profile__editBtn");
//const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup_profile-edit");
const submitPopup=document.querySelector(".popup__submit");
const btnLike = document.querySelector(".element__likeBtn");

const btnCreate = document.querySelector(".popup__create");

const btnAdd = document.querySelector(".profile__addBtn");
const popupAddCard = document.querySelector(".popup_add-card");
const card = document.querySelector(".element");
const btnDelete = document.querySelector(".element__deleteBtn");

const templateCard = document.getElementById("cardElement").content;
const templateCardImage = templateCard.querySelector('.element__image');
const templateCardName = templateCard.querySelector('.element__title');
let inputImageName = document.querySelector('.popup__input-imageName');
let inputUrl = document.querySelector('.popup__input-url');

const btnsClose = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('.popup');
function popupsClose(){
  popups.forEach(popup=>{
    popup.classList.remove('popup_opened');
  });
};
btnsClose.forEach(btn =>{
  btn.addEventListener('click', popupsClose);
});

const btnsLike = document.querySelectorAll('.element__likeBtn');
const handleBtnLike = (evt)=>{
  evt.target.classList.toggle('element__likeBtn_active');
  evt.stopPropagation();  
};

btnsLike.forEach(btn=>{
    btn.addEventListener('click', handleBtnLike);
});

//---------------------------------------------------------------------------------------------//

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
/*
const renderCard = (wrap, name, link) =>{
/*wrap.append(getCardElement(name, link));
    wrap.insertAdjacentHTML('beforeend', 
    `
    <div class="element">
    <button type="button" class="element__deleteBtn"></button>
    <img src="${link}" alt="${name}" class="element__image">
    <div class="element__sign">
      <h2 class="element__title">${name}</h2>
      <button type="button" class="element__likeBtn">
         <!--<img src="./images/Like.png" alt="Лайк!">-->
      </button>
    </div>
    `
);  
};
*/



/* Как примерно должна выглядеть функция
const renderTemplateCard = (e)=>{
  e.preventDefault();
  const newCard = templateCard.querySelector('.element').cloneNode(true);
  newCard.querySelector('.element__title').textContent = inputImageName.value;
  newCard.querySelector('.element__image').src = inputUrl.value;
  newCard.append(true);
  console.log(newCard);
  return newCard;
};*/

//-------Работает отрисовка преддобавленных и добавление новых карточек
const copyTemplateCard = (name, link)=>{
  const newCard = templateCard.querySelector('.element').cloneNode(true);
  newCard.querySelector('.element__title').textContent = inputImageName.value;
  newCard.querySelector('.element__image').src = inputUrl.value;
  newCard.querySelector('.element__title').textContent = name;
  newCard.querySelector('.element__image').src = link;
  return newCard;
};
const renderCard = (wrap, name, link) =>{
  wrap.append(copyTemplateCard(name, link))
};

initialCards.forEach(element => {
  renderCard(cardWrapper, element.name, element.link);
});

popupAddCard.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = e.target.inputImageName.value;
  const link = e.target.inputUrl.value;
  renderCard(cardWrapper, name, link);
  popupAddCard.classList.remove('popup_opened');
});
//------------------------------------------------------------

btnCreate.addEventListener('click', copyTemplateCard);

const btnsDelete = document.querySelectorAll('.element__deleteBtn');
const handleBtnDelete = (evt)=>{
  card.remove();
  evt.stopPropagation();
};
btnsDelete.forEach(btn=>{
  btn.addEventListener('click',handleBtnDelete);
});
/*
 = document.querySelectorAll('.element');
function cardDelete(){
  debugger;
  cards.forEach(card=>{
    card.remove();
    console.log(card);
  });
};
btnsDelete.forEach(btn =>{
  debugger;
  btn.addEventListener('click', cardDelete);
  console.log(btn);
});*/
/*
function handleDeleteCard(){
  btnDelete.closest('.element').remove();
};
btnDelete.addEventListener('click', handleDeleteCard);
*/



function openPopupAddCard(){
  popupAddCard.classList.add('popup_opened');
};

btnAdd.addEventListener("click",openPopupAddCard);



/*
popupAddCard.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = e.target.inputImageName.value;
  const link = e.target.inputUrl.value;
  renderCard(cardWrapper, name, link);
  popupAddCard.classList.remove('popup_opened');
});*/

let inputJob=document.querySelector(".popup__input-job");
let inputName=document.querySelector(".popup__input-name");
let profileJob=document.querySelector(".profile__job");
let profileName=document.querySelector(".profile__name");



function like(){
    btnLike.classList.toggle("element__likeBtn_active");  
};

//btnLike.addEventListener("click", like);


function openPopupEdit(){
    btnAdd.classList.add("popup_opened");
};
function openPopup(){
    popup.classList.add("popup_opened");
    inputJob.value=profileJob.textContent;
    inputName.value=profileName.textContent;  
};

editPopup.addEventListener("click", openPopup);

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    profileJob.textContent=inputJob.value; 
    profileName.textContent=inputName.value;  
    popupsClose();    
}

submitPopup.addEventListener("click", formSubmitHandler);

