import React, { useState } from 'react';

function Body() {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount:''
  });
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount:''
    });
  };

  return (
    <div className='content'>
      <form onSubmit={handleSubmit} className='content2'>
        <label>
          {/* Date: */}
          <input
          placeholder='Date'
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {/* Description: */}
          <input
            placeholder='Description'
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {/* Category: */}
          <input
          placeholder='Category'
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {/* Amount: */}
          <input
            placeholder='Amount'
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className='btn' type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.description}</td>
              <td>{data.category}</td>
              <td>{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Body;
