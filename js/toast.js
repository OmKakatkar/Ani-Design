// Toast Top Left
const showToastTopLeft = document.querySelector('#show-toast-top-left');
const ToastTopLeft = document.querySelector('#toast-top-left');
showToastTopLeft.addEventListener('click', () => {
	showToast(ToastTopLeft);
});

// Toast Top Center
const showToastTopCenter = document.querySelector('#show-toast-top-center');
const ToastTopCenter = document.querySelector('#toast-top-center');
showToastTopCenter.addEventListener('click', () => {
	showToast(ToastTopCenter);
});

// Toast Top Right
const showToastTopRight = document.querySelector('#show-toast-top-right');
const ToastTopRight = document.querySelector('#toast-top-right');
showToastTopRight.addEventListener('click', () => {
	showToast(ToastTopRight);
});

// Toast Bottom Left
const showToastBottomLeft = document.querySelector('#show-toast-bottom-left');
const ToastBottomLeft = document.querySelector('#toast-bottom-left');
showToastBottomLeft.addEventListener('click', () => {
	showToast(ToastBottomLeft);
});

// Toast Bottom Center
const showToastBottomCenter = document.querySelector(
	'#show-toast-bottom-center'
);
const ToastBottomCenter = document.querySelector('#toast-bottom-center');
showToastBottomCenter.addEventListener('click', () => {
	showToast(ToastBottomCenter);
});

// Toast Bottom Right
const showToastBottomRight = document.querySelector('#show-toast-bottom-right');
const ToastBottomRight = document.querySelector('#toast-bottom-right');
showToastBottomRight.addEventListener('click', () => {
	showToast(ToastBottomRight);
});

// Utility Function to toggle Toast
const showToast = toastId => {
	toastId.classList.toggle('hidden');
	setTimeout(() => {
		toastId.classList.toggle('hidden');
	}, 3000);
};
