const GetRandomNumber = function (lowerLimit, upperLimit) {
  if (lowerLimit >= 0 && upperLimit >= lowerLimit) {
    return Math.floor(Math.random()*(upperLimit-lowerLimit) + lowerLimit);
  }
  return 'Введите положительные значения.';
};

// console.log(GetRandomNumber(10, 120));

const CheckStringLength = function (testString, maxLength) {
  if (testString.length < maxLength) {
    return 'Длина строки соответствует критериям.';
  }
  return 'Длина строки не соответствует критериям.';
};

// CheckStringLength('Запомни Меня [Каво? Деда]', 120);
