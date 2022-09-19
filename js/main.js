const GetRandomNumber = function (lowerLimit, upperLimit) {
  if (lowerLimit >= 0 && upperLimit >= lowerLimit) {
    console.log(Math.floor(Math.random()*(upperLimit-lowerLimit) + lowerLimit));
  } else {
    console.log('Введите положительные значения.');
  }
};

// Проверка
GetRandomNumber(10, 120);

const CheckStringLength = function (testString, maxLength) {
  if (testString.length < maxLength) {
    console.log('Длина строки соответствует критериям.');
  } else {
    console.log('Длина строки не соответствует критериям.');
  }
};

// Проверка
CheckStringLength('Запомни Меня [Каво? Деда]', 120);
