import React from 'react';
import './App.css';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <>
    <h1 style={{fontFamily:"calibri",marginLeft:"30px"}}>User Details</h1>
    <TransactionList />
    </>
  );
}

export default App;