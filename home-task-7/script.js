/*
Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.   
*/

// function values(a, b) {
// 	if (a > b) {
// 		return a
// 	} else {
// 		return b
// 	}
// }
// console.log(values(30, 20))

/*
Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
*/

// function values(a, b) {
// 	for (let i = a; i > b; i--) {
// 		if (i % 2 == 0) {
// 			console.log(i)
// 		}
// 	}
// }

// values(50, 27)

/*
Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
*/

// function power(number, exponent = 2) {
// 	return number ** exponent
// }
// console.log(power(16))

/*
Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
*/
// let sum = 0
// function value(n) {
// 	for (let i = 1; i <= n; i++) {
// 		sum += i
// 	}
// 	console.log(sum)
// }
// value(10)

/*
Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
*/

// function value(n, m) {
// 	let sumEven = 0
// 	let sumOdd = 0
// 	let sum = 0

// 	for (let i = n; i <= m; i++) {
// 		if (i % 2 === 0) {
// 			sumEven += i
// 		} else {
// 			sumOdd += i
// 		}
// 		sum = sumEven + sumOdd
// 	}
// 	console.log(sumEven)
// 	console.log(sumOdd)
// 	console.log(sum)
// }
// value(10, 50)

/*
Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
Пример: [ 'one', 'two', 'three' ] => 'three'
*/

function getLongerStr(arr) {
	if (arr.length === 0) {
		return null
	}
	let longerStr = arr[0] // three

	for (let i = 1; i < arr.length; i++) {
		if (arr[i].length > longerStr.length) {
			// 5 > 5
			longerStr = arr[i]
		}
	}

	return longerStr
}

const arr = ["один", "два", "три", "четыре"]
console.log(getLongerStr(arr))
