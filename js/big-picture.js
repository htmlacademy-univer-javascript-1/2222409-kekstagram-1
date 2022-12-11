import {isEscapeKey} from './util.js';

const MIN_COMMENTS_COUNT = 5;

//  Полноэкранный показ изображения
const bigPicture = document.querySelector('.big-picture');
// Комментарии
const commentList = document.querySelector('.social__comments');
const commentItem = commentList.querySelector('.social__comment');
const socialCommentCount = document.querySelector('.social__comment-count');
// Загрузка комментариев
const commentsLoader = document.querySelector('.social__comments-loader');
// Просмотр изображения
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
// Лайки текущего изображения
const likesCount = bigPicture.querySelector('.likes-count');
// Описание текущего изображения
const socialCaption = bigPicture.querySelector('.social__caption');
// Закрытие полноэкранного просмотра изображения
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const showBigPicture = (picture) => {
  const commentsCount = picture.comments.length;
  // Количество показанных комментариев
  let countCommentsShown = commentsCount >= MIN_COMMENTS_COUNT ? MIN_COMMENTS_COUNT : commentsCount;

  const renderComments = (comments, currentCount) => {
    socialCommentCount.textContent = `Загружено ${currentCount} из ${commentsCount} комметариев`;

    if (currentCount >= commentsCount) {
      commentsLoader.classList.add('hidden');
      commentsLoader.removeEventListener('click', clickLoadCommentsButton);
    }

    const fragment = document.createDocumentFragment();

    comments.forEach((comment) => {
      const commentElement = commentItem.cloneNode(true);
      const avatarElement = commentElement.querySelector('img');
      const commentTextElement = commentElement.querySelector('p');

      avatarElement.src = comment.avatar;
      avatarElement.alt = comment.nickname;
      commentTextElement.textContent = comment.text;

      fragment.append(commentElement);
    });

    commentList.append(fragment);
  };

  // Обработчик загрузки комментариев
  function clickLoadCommentsButton() {
    let followLoadComments = MIN_COMMENTS_COUNT + countCommentsShown;

    if (followLoadComments > commentsCount) {
      followLoadComments = commentsCount;
    }

    renderComments(picture.comments.slice(countCommentsShown, followLoadComments), followLoadComments);
    countCommentsShown = followLoadComments;
  }

  // Открытие/закрытие по кнопке
  const onCancelButtonClick = () => {
    closeBigPicture();
  };

  // Открытие/закрытие по Esc
  const onEscapeButtonClick = (evt) => {
    if (isEscapeKey(evt)) {
      closeBigPicture();
    }
  };

  // Открытие большого изображения
  const openBigPicture = () => {
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');

    // Добавление бработчиков при открытии
    bigPictureCancel.addEventListener('click', onCancelButtonClick);
    document.addEventListener('keydown', onEscapeButtonClick);
    commentsLoader.addEventListener('click', clickLoadCommentsButton);
  };

  // Закрытие большого изображения
  function closeBigPicture() {
    document.body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
    commentsLoader.classList.remove('hidden');

    // Удаление обработчиков при закрытии
    bigPictureCancel.removeEventListener('click', onCancelButtonClick);
    document.removeEventListener('keydown', onEscapeButtonClick);
    commentsLoader.removeEventListener('click', clickLoadCommentsButton);
  }

  // Устанавливаем значения в разметку
  bigPictureImg.src = picture.url;
  socialCaption.textContent = picture.description;
  likesCount.textContent = picture.likes;
  commentList.innerHTML = '';
  // Рендер начальных комментариев
  renderComments(picture.comments.slice(0, countCommentsShown), countCommentsShown);
  // Открываем окно
  openBigPicture();
};

export {showBigPicture};
