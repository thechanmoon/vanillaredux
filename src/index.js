import { createStore } from 'redux'

let add = document.getElementById('add')
let minus = document.getElementById('minus')
let number = document.querySelector('span')

const ADD = 'ADD'
const MINUS = 'MINUS'

const reducer = (count = 0, action) => {
	console.log('reducer called', action)
	switch (action.type) {
		case ADD:
			return count + 1
		case MINUS:
			return count - 1
		default:
			return count
	}
}

const store = createStore(reducer)

store.subscribe(() => {
	// console.log('subscribe', store.getState())
	number.innerText = store.getState()
})

add.addEventListener('click', () => {
	store.dispatch({ type: ADD })
})

minus.addEventListener('click', () => {
	store.dispatch({ type: MINUS })
})

console.log(store, store.getState())
