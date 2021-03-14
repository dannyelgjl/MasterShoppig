// Action Creator é uma função que retorna uma action
const sum = (a, b) => {
  return {
    type: 'SUM',
    payload: [a, b]
  };
}

const sub = (a, b) => {
  return {
    type: 'SUB',
    payload: [a, b]
  };
}

export { sum, sub };