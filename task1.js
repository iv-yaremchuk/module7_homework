// Задание 1

// Создаём объект
const obj = {
  key1: 12,
  key2: 4,
  key3: 17,
}

// Создаём функцию, которая выводит в консоль ключи и значения
// содержащиеся в переданном объекте
function getKeysObj(object) {
  for (let key in object) {
    console.log(key + ' : ' + object[key])
  }
}

getKeysObj(obj)