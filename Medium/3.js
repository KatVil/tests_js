/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, 
а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
    let sum = 0;
    if (start < end){
        let i = start + 1;
        while (i < end) {
            sum +=i;
            i++;
        }}
    else if(start > end){
        let i = end + 1;
        while (i < start) {
            sum +=i;
            i++;
        }
    }
  return sum;
}
 console.log(sumOfIntegers(15,10));

module.exports = sumOfIntegers
