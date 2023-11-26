import React, { useState,useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Calculator from './Calculator';
import Slider from './Slide';
import Todo from './Todo';
import Api from './Pagination';
import img from './404-status-code.png';
import Contenu from "./multilange/Components/Contenu/Contenu";
import ToggleLangs from "./multilange/Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./multilange/context/langContext";
import {contextTheme} from "./SwitchMode/context/Themecontext";


function App() {
  const { Theme } = useContext(contextTheme);
 
  return (
    
    
    <div  id={Theme}>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<img src={img} alt="img" className="img-fluid" />} ></Route>
          <Route path='/Calculator' element={<Calculator />} >Calculator</Route>
          <Route path='/SLIDER' element={<Slider />} >SLIDER</Route>
          <Route path='/TODO' element={<Todo />} >To Do List</Route>
          <Route path='/Pag' element={<Api />} >Pagination</Route>
          <Route path='/lang' element={<ContextProvider> <ToggleLangs /> <Contenu /> </ContextProvider>} >MULTILANGUAGE</Route>
          <Route path="*" element={<img src={img} class="img-fluid" />} />
        </Routes>

      
    </div>
  );
}

export default App;
