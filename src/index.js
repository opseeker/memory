import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import {Homepage} from './components/Home';
import {Aboutpage} from './components/About';
import {Chapterpage} from './components/Chapp';
import {DS1} from './story/DS1';
import Story2 from './story/20220202';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/memory" element={<Homepage/>} />
      <Route path="/about" element={<Aboutpage/>} />
      <Route path="/chapter" element={<Chapterpage/>} />
      <Route exact path='/story/dailySchedule' element={<DS1/>}/>
      <Route exact path='/story/bigIssue' element={<Story2/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);