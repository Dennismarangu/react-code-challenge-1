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
}

export default Home;