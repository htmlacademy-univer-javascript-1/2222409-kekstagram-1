import {checkLength} from './util.js';
import {imgUploadForm, textDescription, textHashtags} from './form.js';

const MAX_LENGTH_COMMENT = 140;
const MAX_HASHTAGS_COUNT = 5;
const ValidationRegExp = /^#[A-Za-z0-9А-Яа-яЁё]{1,19}$/;

const RULES = {
  HASHTAG_FORMAT: 'Хештег должен быть от 2 до 20 символов, начинаться с решетки и состоять из букв и цифр ',
  HASHTAG_MAX: `Вы можете указать не больше ${MAX_HASHTAGS_COUNT} хэштегов`,
  HASHTAG_UNIQUE: 'Хэштеги не должны повторяться',
  LENGTH_COMMENT: `Длина комментария может быть не более ${MAX_LENGTH_COMMENT} символов`,
};

const validateHashtags = (value) => {
  const tags = value.toLowerCase().trim().split(' ');
  return tags.every((hashTag) => ValidationRegExp.test(hashTag));
};

const checkHashtagsForQuantity = (value) => {
  const tags = value.toLowerCase().trim().split(' ');
  return tags.length <= MAX_HASHTAGS_COUNT;
};

const checkUniqueness = (value) => {
  const tags = value.toLowerCase().trim().split(' ');
  return tags.length === (new Set(tags)).size;
};

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper'
});

pristine.addValidator(textHashtags, validateHashtags, RULES.HASHTAG_FORMAT);
pristine.addValidator(textHashtags, checkUniqueness, RULES.HASHTAG_UNIQUE);
pristine.addValidator(textHashtags, checkHashtagsForQuantity, RULES.HASHTAG_MAX);
pristine.addValidator(textDescription, (value) => checkLength(value, MAX_LENGTH_COMMENT), RULES.LENGTH_COMMENT);

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
