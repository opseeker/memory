import React from 'react';
import Navbar from './Nav';
import '../css/About.css';

export const Aboutpage = () => {
  return (
      <>
        <Navbar navTitle="About" link2={true} />
        <div className="about">
            <div className="page">
                <h2>description</h2>
                <p>A page created to hone the memories in the web. Or you could say, an Online dairy which you can view and read at any given time.</p>
                <p>There's not even a single piece of information getting out. Isn'that so much great?<br/>
                We have tried adding secure methods for the memory access of the Dairy. Only some few people may access the true contents.</p>
            </div>
        </div>
      </>
  )
}
