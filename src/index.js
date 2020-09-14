let add = document.getElementById('add')
let minus = document.getElementById('minus')
// let number = document.querySelector('span')

// console.log(add, minus, number)

let count = 0

const updateNumber = (number) => {
	count = number
	document.querySelector('span').innerHTML = count
}

// const handleAddClick = () => {
// 	console.log('plus button clicked')
// 	updateNumber(count + 1)
// }

// const handleMinusClick = () => {
// 	console.log('minus button clicked')
// 	updateNumber(count - 1)
// }

add.addEventListener('click', () => {
	updateNumber(count + 1)
})
minus.addEventListener('click', () => {
	updateNumber(count - 1)
})
updateNumber(count)
