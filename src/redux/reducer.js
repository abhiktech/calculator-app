const initialState = {
    expression: ''
  }
  
  const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_VALUE') {
      return Object.assign({}, state, {
        expression: state.expression.concat(action.payload)
      });
    }
    return state;
  }

  export default reducer;