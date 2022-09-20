const getRandomNumber = function (lowerLimit, upperLimit) {
  if (lowerLimit >= 0 && upperLimit >= lowerLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
  }
  return 'Введите положительные значения.';
};

getRandomNumber(10, 120);

const checkStringLength = function (testString, maxLength) {
  return testString.length <= maxLength;
};

checkStringLength('Запомни Меня [Каво? Деда]', 120);
