'use strict';
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

/*Example*/
//Can state it like a normal variable because //even though it is not an array it works like one. btnsOpenModal[i] is now a element

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

// Open Modal functionaility
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

//   Close Modal Functionaility
btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (event) {
  //console.log(event.key);
  if (event.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});

/******* NOTES Below  ******/

//How would you use this method with forEach, Map, etc???
//WITH Selector you say ".hidden", with classList you do not! --Google when you use dot and when not too.

// // says listen for "btmCloseModal" to be `clicked` then do such and such
// btnCloseModal.addEventListener(`click`, function () {
//   modal.classList.add(`hidden`);
//   // variable to be selected "modal", classList prototype, add method for classList (`What to add`)
//   overlay.classList.add(`hidden`);
// });

//Can make ^ dryer by assigning the callback function to it's own variable and then just calling it by that name.

// const openModal = function () {
//   modal.classList.remove(`hidden`);
//   overlay.classList.remove(`hidden`);
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener(`click`, openModal);

//Everytime the event happens JS creates an event object for it and you can access that from the even handler/listener function and it will pass in the event as the argument "Hey js call this function when a keydown event happens and when you do so pass in event object as an argument"
// document.addEventListener(`keydown`, function (event) {
//   console.log(event);
//Can also say event,ket becuase even though js generates it for you the event object IS STILL AN OBJECT;
//   console.log(event.key);
//Using means to call it, you need to use closeModal here so call it, up about js needs to call it only when the event specificed happens so you don't call it.
// });

//Theoretically you'd create a botton per module window, so even if they showed up at botton one two three on screen they were kept in individual divs. . .
