import React from 'react';
import CurrentOrderItem from './CurrentOrderItem';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { clearBasket } from './redux/actions'

const CurrentOrder = ({menuData}) => {
  const dispatch = useDispatch()
  const basket = useSelector(state => state.basket)
  const username = useSelector(state => state.username)

  const listItems = basket.map((key) => {
    const obj = menuData.filter(entry => entry.item_uuid === key)
    return <CurrentOrderItem key={key} itemUuid={key} itemName={obj[0].item} price={obj[0].price}/>
  })

  const calculateTotal = () => {
    let sum = 0
    basket.forEach(key => {
      const obj = menuData.filter(entry => entry.item_uuid === key)
      sum += parseFloat(obj[0].price)
    })
    return sum
  }

  const handleSumbitOrder = async () => {
    const response = await axios.post('/order', [username.username, Math.round(calculateTotal() * 100) / 100])
    const orderUuid = response.data
    await basket.forEach(item => {
      axios.post('/add_item_to_order', [orderUuid, item])
    })
    dispatch(clearBasket())
  }

  return (
    <div className="current-order-wrapper">
      {basket.length ===0 
      ? <p className="current-order-empty-basket">Your basket is empty</p> 
      : 
      <div>
        {listItems}
        <p className="current-order-total">Order total: £{Math.round(calculateTotal() * 100) / 100} </p>
        <button className="current-order-button" onClick={() => dispatch(clearBasket())}>Clear basket</button>
        <button className="current-order-button" onClick={handleSumbitOrder}>Submit order</button>
      </div>
      }
    </div>
  )
}

export default CurrentOrder;
