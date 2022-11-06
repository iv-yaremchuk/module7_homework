// Задание 5

// Создаём класс, в котором содержатся общие параметры
// для всех устройств, определяем потребляемую мощность, если устройство
// выключено - потребляемая мощность равна нолю
class ElectricalDevice {
  constructor(name, power, status) {
    this.name = name;
    this.power = (() => {
      return status == 'on' ? power : 0;
    })();
    this.status = status;
  }
}

// Создаём экземпляры 3-х приборов, передаём собственные свойста
const tableLamp = new ElectricalDevice('Table Lamp', 24, 'on')
const computer = new ElectricalDevice('Computer', 450, 'off')
const toaster = new ElectricalDevice('Toaster', 120, 'on')

// Создаём функцию подсчёта суммы потребляемого электричества,
// функция позволяет передовать параметры неопределённого колличества
// приборов, на случай, если колличество приборов изменится
function getSumPower(...devices) {
  let sum = 0;
  for (let device of devices) sum += device;

  return sum
}

// Выводим сумму потребляемоего электричества всех включённых приборов
console.log(getSumPower(tableLamp.power, computer.power, toaster.power))
