import React, {useState} from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./App.css";

const App = () => {
    const rgb = {
        red: 127,
        green: 127,
        blue: 127
    };
    const [value, setValue] = useState(rgb);
    const [tempValue, setTempValue] = useState(value);

    const onChange = (e) => {
        setValue((value) => {
            return {...value, [e.target.name]: e.target.valueAsNumber};
        });
    };

    const onSubmit = () => {
        setTempValue((tempValue) => {
          return {...tempValue,  ...value};
        });
    };

    const onCancel = () => {
        setValue((value) => {
          return {...value, ...tempValue};
        });
    };
  
    return (
      <div className="color-picker-app">
        <ColorPicker
            value={value}
            onChange={onChange}
            onSubmit={onSubmit}
            onCancel={onCancel}/>
      </div>
      );
};

export default App;