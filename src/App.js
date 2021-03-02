import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import HomePage from './HomePage';
import Navbar from './Navbar';
import BookTable from './BookTable';
import ContactUs from './ContactUs';
import Menu from './Menu'
import CurrentOrder from './CurrentOrder'
import './style.css'

function App() {
  const [menuData, setMenuData] = useState('');
  useEffect(async() => {
    const result = await axios.post('menu_items')
    setMenuData(result.data)
  }, []);

  return (
    <div className="App">
      <Router >
      <Navbar/>
        <Route path="/" exact component={props => <HomePage/>} />
        <Route path="/menu" component={props => <Menu menuData={menuData} />} />
        <Route path="/current_order" component={props => <CurrentOrder menuData={menuData} />} />
        <Route path="/book_table" component={props => <BookTable/>} />
        <Route path="/contact_us" component={props => <ContactUs/>} />
      </Router>
    </div>
  );
}

export default App;
