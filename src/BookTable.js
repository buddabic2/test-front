import React, { useState, useEffect } from 'react';

const BookTable = () => {
  const [ partySize, setPartySize ] = useState(1);
  const [ bookingData, setBookingData ] = useState()

  const handleParySizeChange = (e) => {
    setPartySize(e.target.value)
    setBookingData({
      ...bookingData,
      partySize: partySize
    })
    console.log(bookingData)
  } 

  const handleBookingData = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    })
    console.log(bookingData)
  }

  const handleSumbit = () => {

  }

  return (
    <div className="book-table-main-wrapper">
      <h3>Would you like to book a table with us?</h3>
      <form className="book-table-form-wrapper">
        <label className="book-table-label">Date:
          <input type="datetime-local"/>
        </label>
        <label className="book-table-label">Name: 
          <input type="text" name="name" onChange={handleBookingData}/>
        </label>
        <label className="book-table-label">Surname: 
          <input type="text" name="surname" onChange={handleBookingData}/>
        </label>
        <label className="book-table-label">Party size: {partySize} 
          <input type="range" min="1" max="10" name="partySize" onChange={(e) => {handleParySizeChange(e)}}/>
        </label>
        <label className="book-table-label">Contact number: 
          <input type="tel" name="contactNumber" onChange={handleBookingData}/>
        </label>
        <input type="submit"  value="Submit" className="book-table-submit button"/>
      </form>
    </div>
  )
}

export default BookTable;