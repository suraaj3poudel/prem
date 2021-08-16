import React from 'react';
import './App.css';
import "./Header"
import Header from './Header';
import Table from './Table';
import Footer from './Footer';
import TableHeader from './TableHeader';

function App() {
  return (
    <div className="app">
        <Header></Header>
        
      <div className="appBody">
      <div class="upper_title">
          <h1 id="title"> Premier League Rankings</h1>
          <h1 id="online"> Online</h1>
      </div>
        <TableHeader></TableHeader>
        <Table ></Table> 
      </div>
      <Footer></Footer>
           
    </div>
  );
}

export default App;
