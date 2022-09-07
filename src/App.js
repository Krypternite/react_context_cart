import './App.css';
import Shop from './components/shop';
import Store from './context';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/cart';

function App() {
  return (
    <BrowserRouter>
      <Store>
        <div className="App">
          <Header />
          <Routes>
            <Route path="home" element={<Shop/>} />
            <Route path="cart" element={<Cart/>} />
          </Routes>
        </div>
      </Store>
    </BrowserRouter>
  );
}

export default App;
