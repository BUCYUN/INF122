var nombre = "Brayan";
let contadores = 1;
const año = 2024;
console.log(nombre);
console.log(contador);
console.log(año);
var apellido = "Umpiri";
console.log(apellido);
var color = "rosa";
console.log(color);
let edad = 21;
console.log(edad);
let dinero = 80;
console.log(dinero);
var boleano = true;
console.log(boleano);
const cambio = 125.65;
console.log(cambio)
var uni = "UMSA";
console.log(uni);
let altura = 1.75;
console.log(altura);
const verdad = "arcangel>>>anuel";
console.log(verdad);
var num = 20;
if (num % 2 === 0)
{
    console.log(num + ' es par');
}else{
    console.log(num + ' es impar');
}

var mult = 25

if (mult % 5 === 0)
{
    console.log(mult + ' es multiplo de 5');
}else{
    console.log(mult + ' no es multiplo de 5');
}

for (let i = 0 ; i < 5 ; i++)
{
    console.log(i)
}

for (let i = 10 ; i >= 0 ; i--)
{
    console.log(i)
}

let contador1 = 0;
while (contador < 5){
    contador++
    console.log(contador)
}

let contador2 = 10;
while (contador >= 0){
    console.log(contador)
    contador --
}

//operadores
let suma = 7+2;
let resta = 5-2;
let multiplicacion = 3*5;
let division = 4/2;
let modulo = 10%4;

//comparador
let mayorQue = 10 > 5;
let mayorIgualQue = 13 >= 14;
let menorQue = 10 < 20;
let menorIgualQue = 25 <= 5;
let igualQue = 'hola' === 'hola';
let diferenteQue ='hola' !== 'hola';

//condicionales
let and = true && true;
let or = false || true;
let not = !false;

let sumaMultiplicacionModulo = 2+4*3%3;
let restmultidivsum = 5-7*8/2+3

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);

console.log(mayorQue);
console.log(mayorIgualQue);
console.log(menorQue);
console.log(menorIgualQue);
console.log(igualQue);
console.log(diferenteQue);

console.log(and);
console.log(or);
console.log(not);

console.log(sumaMultiplicacionModulo)
console.log(restmultidivsum)

//Estructura de datos 
//Objetos
const persona = {
    nombre : 'Brayan',
    edad : 21,
    ocupacion : 'Desarrolador'
};
console.log(persona);
persona["apellido"] = "Umpiri";//agrega elementos al objeto
persona["CI"] = 9919088;
persona.nombre = "Pedrito";//modifica la variable
persona.edad = 25;
persona.ocupacion = "Medicina";
console.log(persona); 
console.log(persona.nombre);
console.log(persona.edad);
console.log("Mi nombre es " + persona.nombre + " y tengo " + persona.edad + " años");

//Arrays
const colors = ["verde","rojo","azul"];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors.find("rojo"));
colors.push("amarillo");//agrega elementos a la lista
colors.push("negro");
colors.push("cian");
colors.push("CAFE");
colors.push("MAGENTA");
colors.push(222);
colors.push(12);
colors.push(7);
colors.push(true);
colors.push(false);
colors.push(123.123);
colors.push(7.987);
colors.push(80,90,100);
var elemento = colors.pop();//se elimina el ultimo elemento 
console.log(colors);
colors.reverse();//voltea la lista
colors.sort();//ordena la lista 
console.log(colors.find(222));

for (let i = 0 ; i<colors.length ; i++){
    console.log("Elemento: " + colors[i] + "\nIndice: " + i)
}