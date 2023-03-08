/*

Создайте функцию, которая принимает в качестве аргументов многомерный массив
(массив, содержащий другие массивы) чисел и число из одного из вложенных массивов,
а возвращает индекс вложенного массива, в котором это число находится.

Пример: ( [[1], [2, 3], [4]], 3 ) => 1

*/
/*arr.some(n => Array.isArray(n) ? inArray(n, number) : Object.is(n, val));
const nestedArr = (arr, number) => {
    arr.forEach(arr.indexOf(number, 0));

*/ 
const nestedArr = (arr, number) => {
    // проходим по элементам «внешнего» массива
for(let i = 0; i < arr.length; i++){

    // вычисляем длину «внутреннег» массива
    let innerArrayLength = arr[i].length;
    
    // проходим по элементам «внутреннего» массива
    for(let j = 0; j < innerArrayLength; j++) {
        if (arr[i].includes(number)){
        console.log(arr[i]);
        return j;
        }
    }
}}

console.log(nestedArr(( [[1], [2, 3], [4]], 3 ), 1));

module.exports = nestedArr
