import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Item from "./Components/Items/Item";
import ItemService from './Services/ItemService';
import AddItem from './Components/Items/AddItem';
import './App.css';
import ItemList from './Components/Items/ItemList';
import { ItemProvider } from './Context/ItemContext';

function Index() {
  const items = ItemService.getAllItems();
  return (
    <div>
      <h1>Items</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
         <ItemProvider>
          
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-item">Add Item</Link>
            </li>
            <li>
              <Link to="/items">Items</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/items" element={<ItemList/>} />
        </Routes>
      </Router>
         </ItemProvider>
    </div>
  );
}

export default App;
