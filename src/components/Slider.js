import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'
import '../App.css'

const Slider = () => {
    
    return (
        <AwesomeSlider 
            cssModule={AwesomeSliderStyles} 
            bullets={false}
            fillParent={false}
        >
            <div data-src={ require("../images/slider/1.jpeg")} />
            <div data-src={ require("../images/slider/2.jpeg")} />
            <div data-src={ require("../images/slider/3.jpeg")} />
        </AwesomeSlider>
    )
}

export default Slider