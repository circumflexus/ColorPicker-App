import React, {useEffect} from "react";
import Buttons from "../Buttons/Buttons";

import "./ColorPicker.css";

const ColorPicker = ({value, onChange, onSubmit, onCancel}) => {
    const {red, green, blue} = value;
  
    useEffect(() => {
      document.getElementById('color-box').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }, [red, green, blue]);
    
    return (
      <div className="color-picker">
        <div className="color-box" id="color-box"></div>
        <Buttons
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
          onCancel={onCancel} />
      </div>
    );
  };

  export default ColorPicker;