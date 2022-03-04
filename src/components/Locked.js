import React from 'react';
import '../css/Lock.css';

const LockScreen = () => {
  return (
    <>
    <Screen/>
    </>
  )
}
export default LockScreen;

class Screen extends React.Component{

    render() {
        return (
            <div className="wholeScreen">
                <div className="lockBox">
                    <form>
                        <label>Password:</label>
                        <input type="password" name="password" placeholder="password here" className="text-center"/>
                    </form>
                </div>
                <div class="page-bg"></div>
                    <div class="animation-wrapper">
                        <div class="particle particle-1"></div>
                        <div class="particle particle-2"></div>
                        <div class="particle particle-3"></div>
                        <div class="particle particle-4"></div>
                    </div>
            </div>
        )
    }
}