import React from 'react';
import Navbar from '../components/Nav';
import Story from '../components/Story';

export const DS1 = () => {
  return (
    <>
      <Navbar navTitle="Story1" link3={true} />
          <Story/>
    </>
  )
}
