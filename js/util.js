const getRandomNumber = function (lowerLimit, upperLimit) {
  if (lowerLimit >= 0 && upperLimit >= lowerLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit);
  }
  return 'Введите положительные значения.';
};

const getRandomArrayIndex = function (index) {
  return index[getRandomNumber(0, index.length - 1)];
};

function checkLength(str, maxLength) {
  return str.length <= maxLength;
}

const getRandomDifferentNumber = function (array) {
  const randomIndex = getRandomNumber(0, array.length - 1);
  if (array[randomIndex] === '') {
    return getRandomDifferentNumber(array);
  } else {
    const randomNumber = array[randomIndex];
    array[randomIndex] = '';
    return randomNumber;
  }
};

const getNumbersArray = function (amount) {
  const numbersArray = [];
  for (let i = 0; i < amount; i++) {
    numbersArray[i] = i + 1;
  }
  return numbersArray;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

export {getRandomArrayIndex, getRandomNumber, checkLength, getRandomDifferentNumber, getNumbersArray, isEscapeKey, isEnterKey};
