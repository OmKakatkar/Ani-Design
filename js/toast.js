const showToastBottomLeft = document.querySelector('#show-toast-bottom-left');
const showToastBottomCenter = document.querySelector('#show-toast-bottom-center');
const showToastBottomRight = document.querySelector('#show-toast-bottom-right');
const showToastTopLeft = document.querySelector('#show-toast-top-left');
const showToastTopCenter = document.querySelector('#show-toast-top-center');
const showToastTopRight = document.querySelector('#show-toast-top-right');

const ToastBottomLeft = document.querySelector('#toast-bottom-left');
const ToastBottomCenter = document.querySelector('#toast-bottom-center');
const ToastBottomRight = document.querySelector('#toast-bottom-right');
const ToastTopLeft = document.querySelector('#toast-top-left');
const ToastTopCenter = document.querySelector('#toast-top-center');
const ToastTopRight = document.querySelector('#toast-top-right');

showToastBottomLeft.addEventListener('click', () => showToast(ToastBottomLeft));
showToastBottomCenter.addEventListener('click', () => showToast(ToastBottomCenter));
showToastBottomRight.addEventListener('click', () => showToast(ToastBottomRight));
showToastTopLeft.addEventListener('click', () => showToast(ToastTopLeft));
showToastTopCenter.addEventListener('click', () => showToast(ToastTopCenter));
showToastTopRight.addEventListener('click', () => showToast(ToastTopRight));

const showToast = toastId => {
	toastId.classList.toggle('hidden');
	setTimeout(() => {
		toastId.classList.toggle('hidden');
	}, 3000);
};
