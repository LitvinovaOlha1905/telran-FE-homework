// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

/*
const userInput = +prompt("Введите число")
const tenPercent = 100 / 1000
const value = userInput * tenPercent

console.log(`${value} %`)
console.log(typeof value)
*/

// Написать программу, которая получает два числа и выводит наименьшее

/*
const numberFirst = +prompt("Введите первое число")
const numberSecond = +prompt("Введите второе число")

if (numberFirst > numberSecond) {
	console.log(numberFirst)
} else {
	console.log(numberSecond)
}
*/

//Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: 'Число меньше 100', 'Число больше 100' или 'Число равно 100'

/*
const userNumber = +prompt("Введите первое число")
const hundred = 100

if (userNumber > hundred) {
	console.log(`Число больше ${hundred}`)
} else if (userNumber == 100) {
	console.log(`Число равно ${hundred}`)
} else {
	console.log(`Число меньше ${hundred}`)
}
*/

//Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение 'Hello, <name>', если пользователь совершеннолетний, или 'Hi, <name>', если пользователь несовершеннолетний.

/*
const userName = prompt("Введите Ваше имя")
const userAge = +prompt("Введите Ваш возраст")
const adult = 18

if (userAge >= adult) {
	console.log(`Hello, ${userName}`)
} else {
	console.log(`Hi, ${userName}`)
}
*/
