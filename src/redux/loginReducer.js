const basketReducer = (state={username: null}, action) => {
	const value = action.value
  switch(action.type){
		case 'LOGIN':
			return state.username = value
		default:
			return state
  }
}


export default basketReducer