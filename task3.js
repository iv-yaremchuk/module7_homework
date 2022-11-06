// Задание 3

// Создаём самовызываемую функцию для создания пустого объекта
// без прототипа
const createNullObject = (() => {
  return Object.create(null)
})()

// Создаём пустой объект без прототипа
const nullObj = createNullObject;

// Выводим результат в консоль
console.log(nullObj)