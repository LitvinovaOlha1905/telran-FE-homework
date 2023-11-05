/* ========== 1 ========== */

// Создать кнопку и красный квадрат с размерами 200х200px.
// При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const btnGreen = document.querySelector(".btn-green")
const itemRed = document.querySelector(".item-red")

btnGreen.addEventListener("click", function () {
	itemRed.style.backgroundColor = "green"
	itemRed.classList.add("item-reduce")
})

/* ========== 2 ========== */

// Создать кнопку и розовый квадрат с размерами 200х200px.
// При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const btnBlue = document.querySelector(".btn-blue")
const itemPink = document.querySelector(".item-pink")

btnBlue.addEventListener("click", function () {
	itemPink.style.backgroundColor = "blue"
	console.log(itemPink.style.backgroundColor)
})

/* ========== 3 ========== */

// Создать кнопку и квадрат с размерами 150х150px.
// При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

const btnIncrease = document.querySelector(".btn-increase")
const itemGray = document.querySelector(".item-grey")

btnIncrease.addEventListener("click", function () {
	itemGray.classList.add("item-increase")
})

/* ========== 4 ========== */

// Создать кнопку и div с классом root.
// При клике на кнопку в div создается параграф синего цвета.Текст параграфа произвольный.

const btnRootBlue = document.querySelector(".btn-root-blue")
const itemRootBlue = document.querySelector(".item-root-blue")

btnRootBlue.addEventListener("click", function () {
	itemRootBlue.insertAdjacentHTML(
		"beforeend",
		`<p class="paragraph-root-blue">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quos iure
			dolorem! Accusamus laudantium dolore dolorum asperiores aspernatur minus,
			ratione, libero ullam aliquid quisquam velit consequuntur excepturi
			tempora, eveniet quaerat.
		</p>`
	)
})

/* ========== 5 ========== */

// Создать кнопку и div с классом root.
// При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов.Первый цвет синий.

const btnRootColor = document.querySelector(".btn-root-color")
const itemRootColor = document.querySelector(".item-root-color")

btnRootColor.addEventListener("click", function () {
	itemRootColor.insertAdjacentHTML(
		"beforeend",
		`<p class="paragraph-root-blue">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quos iure
			dolorem! Accusamus laudantium dolore dolorum asperiores aspernatur minus,
			ratione, libero ullam aliquid quisquam velit consequuntur excepturi
			tempora, eveniet quaerat.
		</p>
      <p class="paragraph-root-green">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quos iure
			dolorem! Accusamus laudantium dolore dolorum asperiores aspernatur minus,
			ratione, libero ullam aliquid quisquam velit consequuntur excepturi
			tempora, eveniet quaerat.
		</p>`
	)
})
