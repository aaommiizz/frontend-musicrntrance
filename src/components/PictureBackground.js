import React from 'react'
import Background from '../images-guitar.jpg';

class PictureBackground extends React.Component {
  render() {
    return (
        <div className="picture-background">
            <img src={Background} alt="background" />
        </div> 
    )
  }
}

export default PictureBackground