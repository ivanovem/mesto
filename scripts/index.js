const editPopup = document.querySelector(".profile__editBtn");
const popupProfileEdit = document.querySelector(".popup_profile-edit");
const btnSubmit = document.querySelector(".popup__submit");
const btnLike = document.querySelector(".element__likeBtn");
const btnCreate = document.querySelector(".popup__create");

const inputJob = document.querySelector(".popup__input-job");
const inputName = document.querySelector(".popup__input-name");
const profileJob = document.querySelector(".profile__job");
const profileName = document.querySelector(".profile__name");

const btnAdd = document.querySelector(".profile__addBtn");
const popupAddCard = document.querySelector(".popup_add-card");
const card = document.querySelector(".element");
const btnDelete = document.querySelector(".element__deleteBtn");
const popupImage = document.querySelector('.popup_image');

const templateCard = document.getElementById("cardElement").content;
const templateCardImage = templateCard.querySelector('.element__image');
const templateCardName = templateCard.querySelector('.element__title');
const inputImageName = document.querySelector('.popup__input-imageName');
const inputUrl = document.querySelector('.popup__input-url');

const btnsClose = document.querySelectorAll('.popup__close');

btnsClose.forEach(btn =>{
  btn.addEventListener('click', () => closePopup(document.querySelector('.popup_opened')));
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
  newCard.querySelector('.element__image').alt = 'Изображение';
  
  const btnDelete = newCard.querySelector('.element__deleteBtn');
  const btnLike = newCard.querySelector('.element__likeBtn');

  btnDelete.addEventListener('click', handleDeleteCard);
  btnLike.addEventListener('click', handleLikeCard);
  newCard.querySelector('.element__image').addEventListener('click', () => openPopupImage(name, link));

  return newCard;
};


function openPopupImage(imageTitle, imageUrl){
  openPopup(popupImage);
  popupImage.querySelector('.popup__imageTitle').textContent = imageTitle;
  popupImage.querySelector('.popup__background').src = imageUrl;
};

const renderCard = (wrap, name, link) =>{
  wrap.prepend(copyTemplateCard(name, link))
};

initialCards.forEach(element => {
  renderCard(cardWrapper, element.name, element.link);
});

popupAddCard.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = inputImageName.value;
  const link = inputUrl.value;
  renderCard(cardWrapper, name, link);
  closePopup(popupAddCard);
});

function openPopup(popup){
  popup.classList.add("popup_opened");
};
function closePopup(popup){
  popup.classList.remove('popup_opened');
};



function openPopupAddCard(){
  openPopup(popupAddCard);
  inputImageName.value = '';
  inputUrl.value = '';
};

btnAdd.addEventListener("click",openPopupAddCard);

function openPopupProfileEdit(){
    openPopup(popupProfileEdit);
    inputJob.value = profileJob.textContent;
    inputName.value = profileName.textContent;
};

editPopup.addEventListener("click", openPopupProfileEdit);

function popupProfileEditSubmitHandler (evt) {
    evt.preventDefault();
    profileJob.textContent=inputJob.value; 
    profileName.textContent=inputName.value;  
    closePopup(popupProfileEdit);
  };
popupProfileEdit.addEventListener("submit", popupProfileEditSubmitHandler);
/*
popupProfileEdit.addEventListener("submit", popupProfileEditSubmitHandler);

formInput=popupProfileEdit.querySelector('.popup__input');
const spanError = popupProfileEdit.querySelector('.popup__input-error');


function showInputError (element) {
  element.classList.add('popup__input-error_active');
};

function hideInputError (element) {
  element.classList.remove('popup__input-error_active');
};

const isValid = () => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(spanError);
  } else {
    // Если проходит, скроем
    hideInputError(spanError);
  }
};

formInput.addEventListener('input', isValid);

/*
popupProfileEdit.addEventListener("click", function(event){
  event.preventDefault();
  if(event.target==event.currentTarget){
  closePopup(popupProfileEdit);
  };
});

popupAddCard.addEventListener("click", function(event){
  event.preventDefault();
  if(event.target==event.currentTarget){
  closePopup(popupAddCard);
  }
});
    
popupImage.addEventListener("click", function(event){
  event.preventDefault();
  if(event.target==event.currentTarget){
  closePopup(popupImage);
  }
});

popupProfileEdit.addEventListener("keydown", function(evt){
  if (evt.key==='Escape'){
    closePopup(popupProfileEdit);  
  };
});
*/




