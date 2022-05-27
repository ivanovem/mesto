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



//-------Работает отрисовка преддобавленных и добавление новых карточек, удаление карточек, лайк карточек
const cardWrapper = document.querySelector('.elements');
const handleDeleteCard = (evt)=>{
evt.target.closest('.element').remove();
};
const handleLikeCard = (evt)=>{
  evt.target.classList.toggle('element__likeBtn_active');
  evt.stopPropagation();  
  };
const copyTemplateCard = (name, link)=>{
  const newCard = templateCard.querySelector('.element').cloneNode(true);
  newCard.querySelector('.element__title').textContent = inputImageName.value;
  newCard.querySelector('.element__image').src = inputUrl.value;
  newCard.querySelector('.element__title').textContent = name;
  newCard.querySelector('.element__image').src = link;
  

  const btnDelete = newCard.querySelector('.element__deleteBtn');
  const btnLike = newCard.querySelector('.element__likeBtn');
  const popupImage = newCard.querySelector('.popup_image');
  const btnClose = newCard.querySelector('.popup__close');

  btnDelete.addEventListener('click', handleDeleteCard);
  btnLike.addEventListener('click', handleLikeCard);
  newCard.querySelector('.element__image').addEventListener('click', openPopupImage);
  function openPopupImage(){
    popupImage.classList.add('popup_opened');
    popupImage.querySelector('.popup_image_background').src = newCard.querySelector('.element__image').src;
    const popupbackgroundImage = popupImage.querySelector('.popup_image_background').style.background-Image;
    popupImage.querySelector('.popup_image_title').textContent = newCard.querySelector('.element__title').textContent;
  };

  function popupClose(){
    popupImage.classList.remove('popup_opened');
  };
  btnClose.addEventListener('click', popupClose);

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

//----------------------------------------------------------------------------------------


const handleBtnDelete = (evt)=>{
  element.remove();
  evt.stopPropagation();
};
const btnsDelete = document.querySelectorAll('.element__btnDelete');
btnsDelete.forEach(btn=>{
  btn.addEventListener('click',handleBtnDelete);
});


function openPopupAddCard(){
  popupAddCard.classList.add('popup_opened');
};

btnAdd.addEventListener("click",openPopupAddCard);

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
    console.log('')
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

