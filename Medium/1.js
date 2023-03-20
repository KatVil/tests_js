/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
   for (let i of str){
    console.log(i);
   }
    // return str.toString().split('');
}
console.log(logEachLetter('Котик умывается лапками'));
module.exports = logEachLetter;