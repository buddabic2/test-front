import React from 'react';
import { useDispatch } from 'react-redux'
import { add, subtract } from './redux/actions'

const CurrentOrderItem = ({  key, itemUuid, itemName, price }) => {
  const dispatch = useDispatch()

  return (
    <div className="current-order-item-wrapper">
      <p>{itemName}</p>
      <p>£{price}</p>
      <div>
        <button className="current-order-tiles-button" onClick={() => dispatch(add(itemUuid))}>Add another</button>
      </div>
      <div>
        <button className="current-order-tiles-button" onClick={() => dispatch(subtract(itemUuid))}>Remove</button>
      </div>
    </div>
  )
}

export default CurrentOrderItem;