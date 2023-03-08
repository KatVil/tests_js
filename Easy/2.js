/*
Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта,
а возвращает значение объекта, доступное по этому ключу.
Пример: ({ 'key': 'property' }, 'key') => 'property'
*/

const objValue = (obj, key) => {
    /* Тут код*/
    for (key in obj) {
        return(obj[key]);}
}
console.log(objValue({ 'key': 'property' }, 'key'));
module.exports = objValue