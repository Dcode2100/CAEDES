import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, Contactus, Shop, Signuppage, Loginpage, Profile, Cart} from './pages';


function App() {
  return (
    <div className="App box-border border-2 m-0 p-0">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home'element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signuppage" element={<Signuppage />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
