import {Routes, Route } from 'react-router-dom';
 import './App.css';
import Layout from "./components/Layout/layout";
import LayoutCompra from './components/layoutCompra/layoutCompra';
function App() {
  return (
    
    <Routes>
       <Route path="/" element={<Layout />} />
        <Route path="/compra/:categoryName" element={<LayoutCompra />} />
      </Routes>
  
  );
}

export default App;
