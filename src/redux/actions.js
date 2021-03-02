export const add = (itemUuid) => {
  return {
      type: 'ADD',
      value: itemUuid
  }
}

export const subtract = (itemUuid) => {
  return {
      type: 'SUBTRACT',
      value: itemUuid
  }
}

export const clearBasket = () => {
  return {
    type: 'CLEAR_BASKET'
  }
}

export const login = (username) => {
  return {
    type: 'LOGIN',
    value: username
  }
}