import React from "react";

import "./Sliders.css";

const Sliders = ({value, onChange}) => {
    const {red, green, blue} = value;
    
    return (
        <div className="sliders-block">
            <div className="slider slider-red">
                <input
                    type="range"
                    min="0"
                    max="255"
                    value={red}
                    name="red"
                    onChange={(e) => onChange(e)} />
                <span>R: {red}</span>
            </div>
  
            <div className="slider slider-green">
                <input
                    type="range"
                    min="0"
                    max="255"
                    value={green}
                    name="green"
                    onChange={(e) => onChange(e)} />
                <span>G: {green}</span>
            </div>
  
            <div className="slider slider-blue">
                <input
                    type="range"
                    min="0"
                    max="255"
                    value={blue}
                    name="blue"
                    onChange={(e) => onChange(e)} />
                <span>B: {blue}</span>
            </div>
        </div>
    );
};

export default Sliders;