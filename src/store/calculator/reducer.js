
const INITIAL_STATE = {}
// reducer é uma função que retorna o estado
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'SUM':
      return action.payload[0] + action.payload[1];
    case 'SUB':  
      return action.payload[0] - action.payload[1];
    default: 
      return state;
  } 
} 

export default reducer;