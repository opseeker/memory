import React from 'react'
import {Navbar} from './Nav'
import '../css/Home.css';

export const Homepage = () => {
  return (<>
    <Navbar navTitle="Home"/>
    <div className='section-1'>
      <div className='intro'>
        <h1>Welcome to the Memory</h1>
        <p className='text-1'>Here, we store your moments online for you to read and recall those happy, sad, cheerful, bad or any other times of your life.</p>
        <p className='text-1'>This whole web application is built using React and Node js. With the codes being written by Ankit Saikia.</p>
        <p className='text-1'>Feel free to report any bugs or misbeha-<br/>viour in the app to us.</p>
      </div>
      <div className='section-2'>
        <div className='image-wrapper'></div>
        <h2>Building blocks</h2>
        <p className='text-2'>The whole application is being built up in pieces by us...</p>
      </div>
    </div>
    </>
  )
}
