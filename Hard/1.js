/*

Создайте функцию, которая принимает в качестве аргументов три неотрицательных числа, 
а возвращает значение true («истина»), если три стороны могут сформировать треугольник,
и false («ложь») в противоположном случае.  
Каждое число представляет собой длину стороны треугольника. 

Пример: (3, 4, 5) => true  

Для начала пропиши аргументы функции.  

*/

const validTriangle = (a, b, c) => {
    if (a + b >= c) {
        if (b + c >= a)
            if ((a + c >= b)&&(a!=0)&&(b!=0)&&(c!=0)){
                return true;
    }
    /* else if ((a===0)||(b===0)||(c===0)){
                return(false);
            }
            
            else if ((a===0)&&(b===0)&&(c===0)){
                return(false);
            }*/
    return false;
}
}

console.log(validTriangle(6,2,8))

module.exports = validTriangle
