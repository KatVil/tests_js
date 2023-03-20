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
  let longest = arr[0];
  for(let i = 0; i < arr.length; i++){
    if((arr[i].length > longest) && (arr!=null)){
        longest = arr[i];
        console.log('????');
    }
    else if (arr==[]){
        longest = null;
    }
    else if (arr[i]===arr[(i-1)]){
        longest = arr[(i-1)];
    }
  }
  return longest;
}
console.log(longestString([ 'one', 'two', 'three' ]));
module.exports = longestString
