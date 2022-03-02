import React from 'react';
import Navbar from './Nav';
import '../css/Chap.css';
import {Link} from 'react-router-dom'

export const Chapterpage = () => {
  return (
      <>
        <Navbar navTitle="Chapters" link3={true} />
        <SelectChap/>
      </>
  )
}

class SelectChap extends React.Component {
  render() {
    return (
      <div className="selector">
        <div className="box-1">
          <Contents/>
        </div>
      </div>
    )
  }
}

class Contents extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to='/dailySchedule'>Daily Schedule</Link>
        </li>
      </ul>
    )
  }
}

