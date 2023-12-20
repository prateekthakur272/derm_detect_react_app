import React from 'react'
import testImage from '../assets/test-img.png'
import DragDropFiles from './dragdropfiles'
const TestPage = () => {
  return (
    <div className='test-page container'>
        <div className="row">
            <div className="col-5">
                <img className='test-img' src={testImage} alt="test image" />
            </div>
            <div className="col-1"></div>
            <div className="col-6 d-flex flex-column justify-content-between">
                <h1 className='heading'>Skin Condition Analyzer</h1>
                <hr />
                <h5>Upload affected area images to detect the cancer</h5>
                <DragDropFiles />
            </div>
        </div>
    </div>
  )
}

export default TestPage