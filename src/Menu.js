import React from 'react'; 
import MenuItem from './MenuItem'

const Menu = ({menuData}) => {
  if (menuData === '') {
    return null;
  }
  const listItems = menuData.map((item) => <MenuItem item={item}/>)
  
  return (
    <div className="menu-main-wrapper">
      <div className="menu-titles-wrapper">
          <h4>Course</h4>
          <h4>Food Type</h4>
          <h4>Meal</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Add to basket</h4>
      </div>
      {listItems}
    </div>
  )
}

export default Menu;