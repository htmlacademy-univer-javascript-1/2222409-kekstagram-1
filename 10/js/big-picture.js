const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const commentsList = document.querySelector('.social__comments');
const commentsTemplate = commentsList.querySelector('.social__comment');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsCount = bigPicture.querySelector('.comments-count');

const createComment = function ({ avatar, nickname, commentText }) {
  const comment = commentsTemplate.cloneNode(true);
  const socialPicture = comment.querySelector('.social__picture');
  socialPicture.src = avatar;
  socialPicture.alt = nickname;
  comment.querySelector('.social__text').textContent = commentText;

  return comment;
};

const renderComments = function (comments) {
  commentsList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });
  commentsList.append(fragment);
};

const createBigPicture = function ({ url, likes, description, comment }) {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  bigPictureImg.alt = description;
  socialCaption.textContent = description;
  commentsCount.textContent = comment.length;

  bigPictureCancel.addEventListener('click', () => {
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  });

  renderComments(comment);
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  }
});

export {createBigPicture};
