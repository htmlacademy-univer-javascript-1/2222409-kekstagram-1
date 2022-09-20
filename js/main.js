const getRandomNumber = function (lowerLimit, upperLimit) {
  if (lowerLimit >= 0 && upperLimit >= lowerLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
  }
  return 'Введите положительные значения.';
};

getRandomNumber(10, 120);

const checkStringLength = function (testString, maxLength) {
  if (testString.length <= maxLength) {
    return 'Длина строки соответствует критериям.';
  }
  return 'Длина строки не соответствует критериям.';
};

checkStringLength('Запомни Меня [Каво? Деда]', 120);
