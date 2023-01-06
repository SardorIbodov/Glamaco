const modalContact = document.querySelector(".modal-phone-btn");
const modalContent = document.querySelector(".modal-phone-btn__content");
const headerPhoneBtn = document.querySelectorAll(".phone-btn");
const closeModal = document.querySelector(".close-modal");
const body = document.querySelector("body");
const submitBtn = document.querySelector(".submit-btn");

for (item of headerPhoneBtn)
  item.onclick = function () {
    modalContact.style.height = "100vh";
  };

closeModal.onclick = function () {
  modalContact.style.height = "0";
};

modalContact.onclick = function () {
  if (event.target == modalContact) {
    modalContact.style.height = "0";
  }
};

submitBtn.onclick = function () {
  modalContact.style.height = "0";
};

const navigation = document.querySelector(".navigation");
const navigationClose = document.querySelector(".navigation__close");
const burger = document.querySelector(".header__burger-menu");
const navigationContent = document.querySelector(".navigation__content");
const navigationLink = document.querySelectorAll(".menu__link");

burger.onclick = function () {
  navigation.style.width = "100vw";
};

navigationClose.onclick = function () {
  navigation.style.width = "0";
};

navigation.onclick = function () {
  if (event.target == navigation) {
    navigation.style.width = "0";
  }
};

for (item of navigationLink) {
  item.onclick = function () {
    navigation.style.width = "0";
  };
}

const orderLink = document.querySelectorAll(".catalog-card__link");
const orderModal = document.querySelector(".modal-order");
const orderModalClose = document.querySelector(".modal-order__close");
const orderModalSubmit = document.querySelector(".modal-order-form__submit");

for (i = 0; i < orderLink.length; i++) {
  orderLink[i].onclick = function () {
    orderModal.style.height = "100vh";
  };
}

orderModalClose.onclick = function () {
  orderModal.style.height = "0";
};

orderModalSubmit.onclick = function () {
  orderModal.style.height = "0";
};

orderModal.onclick = function () {
  if (event.target == orderModal) {
    orderModal.style.height = "0";
  }
};
