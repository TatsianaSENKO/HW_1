//ЗАДАНИЕ 10
console.log ('ЗАДАНИЕ 10');

let days = prompt ('Укажите день из интервала от 1 до 365');
    m1 = days / 31;
    m2 = Math.round (days / 31);
    
    if (m1 > m2) {
        month = m2+1;
    } else {
        month = m2;
    }

    if (0 > month) {
        console.log ('Указанное число не входит в требуемый диапозон');
    } else if (12 < month) {
        console.log ('Указанное число не входит в требуемый диапозон');
    } else {
        console.log (month + ' месяц');
    }

switch (Math.round(month)) {
    case 12:
    case 1:
    case 2:
        console.log ('Зима ');
        break;
    case 3:
    case 4:
    case 5:
        console.log ('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log ('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log ('Осень');
        break;
    default:
        console.log ('Указанное число не входит в требуемый диапозон');
}