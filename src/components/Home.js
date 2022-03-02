import React from 'react'
import Navbar from './Nav'
import '../css/Home.css';
import Img1 from '../media/img/me.jpg';

export const Homepage = () => {
  return (<>
    <Navbar navTitle="Home" link1={true} />
    <div className='section-1'>
      <div className='intro'>
        <h1>Welcome to the Memory</h1>
        <p className='text-1'>Here, we store your moments online for you to read and recall those happy, sad, cheerful, bad or any other times of your life.</p>
        <p className='text-1'>This whole web application is built using React and Node js. With the codes being written by Ankit Saikia.</p>
        <p className='text-1'>Feel free to report any bugs or misbehaviour in the app to us.</p>
      </div>
      <div className='section-2'>
        <div className='image-wrapper'></div>
        <h2>Building blocks</h2>
        <p className='text-2'>The whole application is being built up in pieces by us...</p>
      </div>
    </div>
    <ImageWrapper />
    </>
  )
}

class ImageWrapper extends React.Component {
  render() {
    return(
      <>
      <div className='image-wrapper'>
        <img src={Img1} className="img-1"/>
        <div className="author-txt">
          <p className="author">Ankit Saikia</p>
          <p>FWD (FrontEnd Web Developer)</p>
          <p><span className="git">GitHub</span> based <br/>- web project -</p>
          <p>Page creator</p>
        </div>
      </div>
          <p className="L-txt">Sercured by &reg;DMA-lock encryption&trade;</p>
      </>
    )
  }

}
