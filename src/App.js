import React from 'react';
// components and pages
import Home from './pages/Home';
import Nav from './components/Nav'
// styles
import GlobalStyle from './components/GlobalStyles';
// routes
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <Nav/>
    <GlobalStyle/>
    <Routes>
    <Route path="/" element={<Home/> }></Route>
    <Route path='/game/:id' element={<Home/> }></Route>
    </Routes>
    </div>
  );
}

export default App;
