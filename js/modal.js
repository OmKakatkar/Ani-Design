// Simple Modal
const showSimpleModal = document.querySelector('#show-simple-modal');
const simpleModal = document.querySelector('#simple-modal');
const closeSimpleModal = document.querySelector('#close-simple-modal');
showSimpleModal.addEventListener('click', () => toggleModal(simpleModal));
closeSimpleModal.addEventListener('click', () => toggleModal(simpleModal));

// Modal With Button
const showModalWithButton = document.querySelector('#show-modal-with-button');
const modalWithButton = document.querySelector('#modal-with-button');
const closeModalWithButton = document.querySelector('#close-modal-with-button');
showModalWithButton.addEventListener('click', () =>
	toggleModal(modalWithButton)
);
closeModalWithButton.addEventListener('click', () =>
	toggleModal(modalWithButton)
);

// Modal List
const modalList = document.querySelector('#modal-list');
const closeModalList = document.querySelector('#close-modal-list');
const showModalList = document.querySelector('#show-modal-list');
showModalList.addEventListener('click', () => toggleModal(modalList));
closeModalList.addEventListener('click', () => toggleModal(modalList));

// Utility functions for Opening and Closing the modals
const toggleModal = modalId => {
	modalId.classList.toggle('hidden');
};

window.addEventListener('click', e => {
	if (e.target.classList.contains('modal')) {
		e.target.classList.add('hidden');
	}
});
