import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { add, subtract } from './redux/actions'

const Menu = ({ item }) => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.basket.filter(v => v === item.item_uuid).length)

  const handleAddOne = () => {
    dispatch(add(item.item_uuid))
  }
  
  const handleRemoveOne = () => {
    dispatch(subtract(item.item_uuid))
  }

  return (
    <div className="menu-titles-wrapper">
      <p>{item.course}</p>
      <p>{item.item_type}</p>
      <p>{item.item}</p>
      <p>£{item.price}</p>
      <p>{item.stock}</p>
      <div>
        <button className="menu-tiles-button" onClick={handleAddOne}>+1</button>
        <span>{count}</span>
        <button className="menu-tiles-button" onClick={handleRemoveOne}>-1</button>
      </div>
    </div>
  )
}

export default Menu;