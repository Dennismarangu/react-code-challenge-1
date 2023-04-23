import React, { useState } from "react";
import "./Home.css";

function Home() {
   // Define state to keep track of transactions and search term
   const [transactions, setTransactions] = useState([
     { id: 1, description: "Coffee", amount: -3.5, category: "Food" },
     { id: 2, description: "Salary", amount: 2000, category: "Income" },
     { id: 3, description: "Paycheck from Bob's Burgers", amount: -800, category: "Income" },
   ]);
   const [searchTerm, setSearchTerm] = useState("");
   const [sortColumn, setSortColumn] = useState("");
 
   // Define function to handle form submission
   const handleSubmit = (event) => {
     event.preventDefault();
     const newTransaction = {
       id: transactions.length + 1,
       description: event.target.elements.description.value,
       amount: parseFloat(event.target.elements.amount.value),
       category: event.target.elements.category.value,
     };
     setTransactions([...transactions, newTransaction]);
     event.target.reset();
   };

    // Define function to filter transactions by search term
    const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

    // Define function to sort transactions by column
     const sortedTransactions = filteredTransactions.sort((a, b) => {
       if (a[sortColumn] < b[sortColumn]) {
      return -1;
    }
       if (a[sortColumn] > b[sortColumn]) {
      return 1;
    }
       return 0;
  });

       // Define function to delete a transaction
      const handleDelete = (id) => {
      const updatedTransactions = transactions.filter(
        (transaction) => transaction.id !== id
      );
     setTransactions(updatedTransactions);
 };
 return (
   <div>
     <h1>Recent Transactions</h1>
     <form onSubmit={handleSubmit}>
       <label htmlFor="description">Description:</label>
       <input type="text" id="description" required />
       <label htmlFor="amount">Amount:</label>
       <input type="number" id="amount" required />
       <label htmlFor="category">Category:</label>
       <input type="text" id="category" required />
       <button type="submit">Add Transaction</button>
     </form>
     <input
       type="text"
       placeholder="Search transactions"
       value={searchTerm}
       onChange={(event) => setSearchTerm(event.target.value)}
     />
     <table>
       <thead>
         <tr>
           <th onClick={() => setSortColumn("description")}>Description</th>
           <th onClick={() => setSortColumn("category")}>Category</th>
           <th onClick={() => setSortColumn("amount")}>Amount</th>
           <th>Delete</th>
         </tr>
       </thead>
       <tbody>
         {sortedTransactions.map((transaction) => (
           <tr key={transaction.id}>
             <td>{transaction.description}</td>
             <td>{transaction.category}</td>
             <td>{transaction.amount.toFixed(2)}</td>
             <td>
               <button onClick={() => handleDelete(transaction.id)}>
                 Delete
               </button>
             </td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 );

};

export default Home;