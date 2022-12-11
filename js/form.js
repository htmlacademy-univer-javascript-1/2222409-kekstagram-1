import {isEscapeKey} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');

const imgUploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    imgUploadOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const onPopupEscKeydownFocus = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

function closeFormEditImg() {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUploadForm.reset();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadCancel.addEventListener('click', () => {
  closeFormEditImg();
});

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
});

textDescription.addEventListener('keydown', onPopupEscKeydownFocus);
textHashtags.addEventListener('keydown', onPopupEscKeydownFocus);

export {imgUploadForm, textDescription, textHashtags};
