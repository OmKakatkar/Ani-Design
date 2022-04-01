const showSimpleModal = document.querySelector('#show-simple-modal');
const showModalWithButton = document.querySelector('#show-modal-with-button');
const showModalList = document.querySelector('#show-modal-list');

const simpleModal = document.querySelector('#simple-modal');
const closeSimpleModal = document.querySelector('#close-simple-modal');
const modalWithButton = document.querySelector('#modal-with-button');
const closeModalWithButton = document.querySelector('#close-modal-with-button');
const modalList = document.querySelector('#modal-list');
const closeModalList = document.querySelector('#close-modal-list');

showSimpleModal.addEventListener('click', () => toggleModal(simpleModal));
closeSimpleModal.addEventListener('click', () => toggleModal(simpleModal));
showModalWithButton.addEventListener('click', () => toggleModal(modalWithButton));
closeModalWithButton.addEventListener('click', () => toggleModal(modalWithButton));
showModalList.addEventListener('click', () => toggleModal(modalList));
closeModalList.addEventListener('click', () => toggleModal(modalList));

const toggleModal = modalId => {
	modalId.classList.toggle('hidden');
};