import React, { useState, useEffect } from 'react';
import "./TransactionTable.css";

function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({ date: '', description: '', category: '', amount: '' });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/db.json');
        const data = await response.json();
        setTransactions(data.transactions);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setTransactions(transactions => [...transactions, newTransaction]);
    setNewTransaction({ date: '', description: '', category: '', amount: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleDelete = id => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const filteredTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={newTransaction.date} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" value={newTransaction.description} onChange={handleChange} />
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={newTransaction.category} onChange={handleChange}>
          <option value="Income">Income</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Gift">Gift</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Housing">Housing</option>
        </select>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" name="amount" value={newTransaction.amount} onChange={handleChange} />
        <button type="submit">Add Transaction</button>
      </form>
      <br />
      <label htmlFor="filter">Filter by Description:</label>
      <input type="text" id="filter" name="filter" value={filter} onChange={handleFilterChange} />
      <br />
      <br />
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
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td><button onClick={() => handleDelete(transaction.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;