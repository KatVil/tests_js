/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/
let str = 'web_development';
const camelCase = (str) => {
    return str
            .split('_')
            .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
            .join('');
}
console.log(camelCase(str));
module.exports = camelCase