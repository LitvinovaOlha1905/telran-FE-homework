/*
Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
*/
const numbers = document.querySelector(".numbers")

for (let i = 100; i >= 50; i -= 10) {
	numbers.insertAdjacentHTML("beforeend", `<p>${i}</p>`)
}

/*
Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
*/

const names = ["Rachel", "Chloe", "Maxine", "Warren", "Mark", "Nathan"]

const stringsContainer = document.querySelector(".strings_container")

for (let i = 0; i < names.length; i++) {
	stringsContainer.insertAdjacentHTML("beforeend", `<p>${names[i]}</p>`)
}

/*
Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.
*/

const persons = [
	{
		first_name: "Rachel",
		last_name: "Amber",
		age: 18,
	},
	{
		first_name: "Chloe",
		last_name: "Price",
		age: 17,
	},
	{
		first_name: "Maxine",
		last_name: "Caulfield",
		age: 17,
	},
	{
		first_name: "Warren",
		last_name: "Graham",
		age: 20,
	},
	{
		first_name: "Mark",
		last_name: "Jefferson",
		age: 30,
	},
	{
		first_name: "Nathan",
		last_name: "Prescott",
		age: 19,
	},
]

const usersContainer = document.querySelector(".users_container")
const adult = 18
for (let i = 0; i < persons.length; i++) {
	if (persons[i].age >= adult) {
		usersContainer.insertAdjacentHTML(
			"beforeend",
			`<div class="person_container">
      <h3>${persons[i].first_name}</h3>
      <p>${persons[i].last_name}</p>
      <p>${persons[i].age}</p>
   </div>`
		)
	}
}
