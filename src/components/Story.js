import React from 'react'
import PropTypes from 'prop-types';
import '../css/story.css';
import LockScreen from './Locked';
import ReadingProgress from 'react-reading-progress';
import Navbar from './Nav';

const Story = (props) => {
  return (
    <>
    <ReadingProgress targetEl="#storyBox" />
    <LockScreen/>
    <Navbar/>
    <div className="container-a" id="storyBox">
        <div className="b">
            <h1>{props.title}</h1>
            <div className="story">{props.story}</div>
            <div className="details">
                <p className="authorName">{props.author}</p>
                <p className="date">{props.date}</p>
                <div className="box-a"></div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Story;

class Sample extends React.Component {
    render() {
        return (
            <>
            <h1>Sample Title</h1>
            <p>This is a sample story component...</p>
            <p>Keeping the clean and old style codes.</p>
            </>
        )
    }
}


Story.defaultProps = {
    author: "Ankit Saikia",
    date: "00-00-0000",
    story: <Sample/>,
    title: "Title"
}

Story.propTypes = {
    author: PropTypes.string,
    date: PropTypes.number,
}