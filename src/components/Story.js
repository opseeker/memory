import React from 'react'
import PropTypes from 'prop-types';

const Story = (props) => {
  return (
    <>
    <div className="container-a">
        <div className="container-b">
            <div className="story">{props.story}</div>
            <div className="details">
                <p className="authorName">{props.author}</p>
                <p className="date">{props.date}</p>
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
}

Story.propTypes = {
    story: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.number,
}