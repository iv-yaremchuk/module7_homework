// Задание 2

// Создаём строку и объект
const strName = 'str';
const obj = {
  key1: 12,
  key2: 2,
  key3: 17,
  key4: 'str'
}

// Создаём функцию поиска строки среди свойств объекта, в зависимости
// от результата, в консоль выводится однократно true или false
function getValueObj(name, object) {
  let result = false;
  for (let key in object) {
    if (object[key] === name) {
      result = true;
    }
  }
  console.log(result)
}

getValueObj(strName, obj)
