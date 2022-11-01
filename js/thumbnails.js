import {getRandomUserPhotos} from './data.js';

const renderThumbnails = function () {
  const photosTemplate = document.querySelector('#picture').
    content.
    querySelector('.picture');

  const photosContainer = document.querySelector('.pictures');
  const containerFragment = document.createDocumentFragment();
  const createPhotos = getRandomUserPhotos();

  createPhotos.forEach(({url, likes, comments}) => {
    const photos = photosTemplate.cloneNode(true);
    photos.querySelector('.picture__img').setAttribute('src', url);
    photos.querySelector('.picture__likes').textContent = likes;
    photos.querySelector('.picture__comments').textContent = comments;
    containerFragment.appendChild(photos);
  });

  photosContainer.appendChild(containerFragment);
};

export {renderThumbnails};
