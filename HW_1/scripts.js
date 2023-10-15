//ЗАДАНИЕ 2

console.log ('ЗАДАНИЕ 2');

let a1 = 5%3;
    a2 = 3%5;
    a3 = 5+'3';
    a4 = '5'-3;
    a5 = 75+'кг';
    a6 = 785*653;
    a7 = 100/25;
    a8 = 0*0;
    a9 = 0/2; a10=89/0;
    a11 = 98+2;
    a12 = 5-98;
    a13 = (8+56*4)/5;
    a14 = (9-12)*7/(5+2);
    a15 = +"123";
    a16 = 1||0;
    a17 = false||true;
    a18 = true>0;

console.log (a1, typeof a1);
console.log (a2, typeof a2);
console.log (a3, typeof a3);
console.log (a4, typeof a4);
console.log (a5, typeof a5);
console.log (a6, typeof a6);
console.log (a7, typeof a7);
console.log (a8, typeof a8);
console.log (a9, typeof a9);
console.log (a10, typeof a10);
console.log (a11, typeof a11);
console.log (a12, typeof a12);
console.log (a13, typeof a13);
console.log (a14, typeof a14);
console.log (a15, typeof a15);
console.log (a16, typeof a16);
console.log (a17, typeof a17);
console.log (a18, typeof a18);

console.log ('');

//ЗАДАНИЕ 3

console.log ('ЗАДАНИЕ 3');

let width = 10; //см
    height = 23; //см
    SPryam = width * height; //см2

console.log ('Площадь прямоугольника равна ' + SPryam + ' см2');
console.log ('');

//ЗАДАНИЕ 4

console.log ('ЗАДАНИЕ 4');

let h = 10; //м
    d = a7; //м
    VCilindra = Math.round (h * Math.PI * d ** 2 / 4); //м3

console.log ('Объем цилиндра равен ' + VCilindra + ' м3');
console.log ('');

//ЗАДАНИЕ 5

console.log ('ЗАДАНИЕ 5');

let r = 5; //см
    SKruga = Math.round (Math.PI * r ** 2); //см2

console.log ('Площадь круга равна ' + SKruga + ' см2');
console.log ('');

//ЗАДАНИЕ 6

console.log ('ЗАДАНИЕ 6');

let ATrap = 5; //см
    BTrap = 7; //см
    HTrap = 10; //см
    STrap = (ATrap+BTrap)*HTrap/2; //см2

console.log ('Площадь трапеции равна ' + STrap + ' см2');
console.log ('');

//ЗАДАНИЕ 7

console.log ('ЗАДАНИЕ 7');

let S = 2000000; //руб
    p = 10; //%
    years = 5; //лет
    pereplataY1 = S * p/100; //переплата за первый год
    pereplataY2 = (S - S/years) * p/100; //переплата за второй год
    pereplataY3 = (S - S/years * 2) * p/100; //переплата за третий год
    pereplataY4 = (S - S/years * 3) * p/100; //переплата за четвертый год
    pereplataY5 = (S - S/years * 4) * p/100; //переплата за пятый год
    Pereplata = pereplataY1+pereplataY2+pereplataY3+pereplataY4+pereplataY5; //руб.

console.log ('Переплата по кредиту составляет ' + Pereplata + ' руб.');
console.log ('');

//ЗАДАНИЕ 8

console.log ('ЗАДАНИЕ 8');

let a = 8;
    b = 3;
x1 = (16 - a + 2 * b) / 2;
x2 = (a - 15 * b) / (b - 6);
x3 = 23780 / (3 + a + b);

console.log (x1);
console.log (x2.toFixed(1));
console.log (x3.toFixed(1));
console.log ('');
