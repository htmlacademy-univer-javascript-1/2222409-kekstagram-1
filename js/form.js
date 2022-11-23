import {isEscapeKey, checkLength} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');

const imgUploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormEditImg();
  }
};

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  showUploadImg();
});

function showUploadImg() {
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeFormEditImg() {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.imgUploadForm.reset();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadCancel.addEventListener('click', () => {
  closeFormEditImg();
});

const pristine = new Pristine(imgUploadForm);

const tags = function (section) {
  section.toLowerCase().split(' ');
};

const isValidHashtag = function (section) {
  const array = section.split(' ');
  const RegExp = /^#[A-Za-z0-9А-Яа-яЁё]{1,19}$/;
  for (const arrayPart of array) {
    if (RegExp.test(arrayPart) && arrayPart === '') {
      return true;
    }
  } return false;
};

pristine.addValidator(textHashtags,
  (section) => tags(section).length <= 5,
  'Не более пяти хэштегов');

pristine.addValidator(textHashtags,
  (tag) => isValidHashtag(tag),
  'Хэштег состоит из букв и цифр, начинается с #, длиной от 2 до 20 символов, включая #'
);

pristine.addValidator(textDescription,
  (comment) => checkLength(comment, 140),
  'Ваш комментарий превысил значение в 140 символов'
);

textHashtags.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

textDescription.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

imgUploadForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (isValid) {
    evt.preventDefault();
  }
});
