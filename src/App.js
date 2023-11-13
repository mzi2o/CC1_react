import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Calculator from './Calculator';
import Slider from './Slide';
import Todo from './Todo';
import Api from './Pagination';
import img from './404-status-code.png';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
        <Routes>
          <Route path='/Calculator' element={<Calculator />} >Calculator</Route>
          <Route path='/SLIDER' element={<Slider />} >SLIDER</Route>
          <Route path='/TODO' element={<Todo />} >To Do List</Route>
          <Route path='/Pag' element={<Api />} >Pagination</Route>
          <Route path="*" element={<img src={img} class="img-fluid" /> } />
        </Routes>
      
    </div>
  );
}

export default App;
