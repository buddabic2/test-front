const basketReducer = (state=[], action) => {
	const value = action.value
  switch(action.type){
		case 'ADD':
			if (state.filter(v => v === value).length === 5) {
				return [...state]
			}
			return [...state, value]
		case 'SUBTRACT':
			state.splice(state.indexOf(value), 1)
			return [...state]
		case 'CLEAR_BASKET':
			console.log('running')
			return []
		default:
			return state
  }
}


export default basketReducer