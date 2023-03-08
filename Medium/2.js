/*

Создайте функцию, которая возвращает массив из 10 случайных целых чисел от 0 до 10.

Пример: () => [ 0, 1, 2, 2, 7, 4, 3, 2, 6, 3 ]

*/
/*function randomNumbersArray(length = 10) {
    return Array.from(Array(length), () => Math.floor(Math.random() * 100) + 1);
  }*/
const randomArr = (length = 10) => {
    return Array.from(Array(length), () => Math.floor(Math.random() * 10) + 1);
}
console.log(randomArr());
module.exports = randomArr
