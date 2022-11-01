import {getRandomNumber, getRandomArrayIndex, getNumbersArray, getRandomDifferentNumber} from './util.js';

const RANDOM_AVATAR = getRandomNumber(1, 6);

const ID_COMMENT = getNumbersArray(100);
const ID_PHOTOS = getNumbersArray(25);
const ID_USERS = getNumbersArray(25);

const PHOTO_DESCRIPTIONS = [
  'Мы с кентами под хардбас тусим в шмотках адидас.',
  'Серёжа любил петь, но все Пети были натуралами.',
  'Штирлиц долго смотрел на хозяйственное мыло. На мыле было написано 70%. "Зависло", - подумал Штирлиц.',
  'Дагестанский суд не смог продолжаться, так как адвокату запретили говорить слово "брат."'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иван',
  'Иаков',
  'Ной',
  'Варлаам',
  'X Æ A-12',
  'Сократ',
  'Петрович',
  'Гайдай',
  'Гай Фокс'
];

const PHOTO_COUNT = 25;

const getRandomComment = function () {
  const comment = {
    id: getRandomDifferentNumber(ID_COMMENT),
    avatar: `img/avatar-${RANDOM_AVATAR}.svg`,
    message: getRandomArrayIndex(COMMENTS),
    name: getRandomArrayIndex(NAMES)
  };
  return comment;
};

const getRandomPhoto = function () {
  const user = {
    id: getRandomDifferentNumber(ID_USERS),
    url: `photos/${getRandomDifferentNumber(ID_PHOTOS)}.jpg`,
    description: getRandomArrayIndex(PHOTO_DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comment: getRandomComment(),
  };
  return user;
};

const getRandomUserPhotos = function () {
  const userPhotos = [];
  for (let i = 0; i < PHOTO_COUNT; i++) {
    userPhotos[i] = getRandomPhoto();
  }
  return userPhotos;
};

export{getRandomUserPhotos, getRandomComment, getRandomPhoto};
