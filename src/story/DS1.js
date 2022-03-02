import React from 'react';
import Navbar from '../components/Nav';
import Story from '../components/Story';

export const DS1 = () => {
  return (
    <>
      <Navbar navTitle="Story1" link3={true} />
          <Story title="Daily Schedule" 
          story={<>
            <p className="p1">The daily routines in both of our life was a little different in many ways.</p>
          </>}
          date="02/03/2022" 
          />
    </>
  )
}
