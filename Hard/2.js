/*

Создайте функцию, которая принимает в качестве аргументов массив строк,
а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

Для начала пропиши аргументы функции.  

Пример: [ 'one', 'two', 'three' ] => 'three'

*/
let arr = [ 'one', 'two', 'three' ];
const longestString = (arr) => {
  let longestEl = arr[0];
  let max = 0;
  if (arr.length === 0) return null
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > max){
        max = arr[i].length;
        longestEl = arr[i];
        //console.log('????');
    }
    else if (arr[i].length===arr[(i-1)].length){
        longestEl = arr[(i-1)];
    }
  }
  return longestEl;
}
console.log(longestString([ 'one', 'two', 'three' ]));
module.exports = longestString
