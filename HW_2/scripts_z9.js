//ЗАДАНИЕ 9

let d = prompt ('Введите любое количество дней');
    y = d / 365;
    m = d / 31;
    w = d / 7;
    h = d * 24;
    min = h * 60;
    sec = min * 60;

document.write (d + ' дней равно: ')

if (y < 1) {
    document.write (' меньше года, ');
} else {
    document.write (Math.round(y) + ' год, ');
}

if (m < 1) {
    document.write ('меньше месяца, ');
} else {
    document.write (Math.round(m) + ' месяц, ');
}

if (w < 1) {
    document.write ('меньше недели, ');
} else {
    document.write (Math.round(w) + ' недель, ');
}

if (h < 1) {
    document.write ('меньше часа, ');
} else {
    document.write (Math.round(h) + ' часов, ');
}

if (min < 1) {
    document.write ('меньше минуты, ');
} else {
    document.write (Math.round(min) + ' минут, ');
}

if (sec < 1) {
    document.write ('меньше секунды ');
} else {
    document.write (Math.round(sec) + ' секунд ');
}