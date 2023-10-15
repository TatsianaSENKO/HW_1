//ЗАДАНИЕ 10

let day = prompt ('Укажите день из интервала от 1 до 365');
    m1 = day / 31;
    m2 = Math.round (day / 31);
    
    if (m1 > m2) {
        month = m2+1;
    } else {
        month = m2;
    }


    if (0 > month) {
        document.write ('Указанное число не входит в требуемый диапозон');
    } else if (12 < month) {
        document.write ('Указанное число не входит в требуемый диапозон');
    } else {
        document.write (month + ' месяц. ');
    }

switch (Math.round(month)) {
    case 12:
    case 1:
    case 2:
        document.write ('Зима');
        break;
    case 3:
    case 4:
    case 5:
        document.write ('Весна');
        break;
    case 6:
    case 7:
    case 8:
        document.write ('Лето');
        break;
    case 9:
    case 10:
    case 11:
        document.write ('Осень');
        break;
    default:
        document.write ('Указанное число не входит в требуемый диапозон');
}