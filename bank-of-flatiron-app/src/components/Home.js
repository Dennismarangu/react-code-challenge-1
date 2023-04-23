import React from "react";
import "./Home.css";

function Home() {
   // Define state to keep track of transactions and search term
   const [transactions, setTransactions] = useState([
     { id: 1, description: "Coffee", amount: -3.5, category: "Food" },
     { id: 2, description: "Salary", amount: 2000, category: "Income" },
     { id: 3, description: "Rent", amount: -800, category: "Housing" },
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


}

export default Home;