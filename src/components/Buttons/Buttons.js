import React, {useState} from "react";
import Sliders from "../Sliders/Sliders";

import "./Buttons.css";

const Buttons = ({value, onChange, onSubmit, onCancel}) => {
    const [toggle, setToggle] = useState(true);

    const onCancelClick = () => {
        setToggle(false);
        onCancel();
    };

    if(toggle) {
        return (
            <div className="sliders-buttons-block">
                <Sliders
                    value={value}
                    onChange={onChange}
                />
                <div className="buttons-block">
                    <button 
                        className="button button-hide"
                        onClick={() => setToggle(false)}>
                            Hide
                    </button>
                    <button
                        className="button"
                        onClick={onCancelClick}>
                            Cancel
                    </button>
                    <button
                        className="button"
                        onClick={onSubmit}>
                            Submit
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="nosliders-buttons-block">
                <div className="text-block">
                    <span>Sliders are hidden</span>
                </div>
                <div className="buttons-block">
                    <button 
                        className="button"
                        onClick={() => setToggle(true)}>
                            Show
                    </button>
                    <button
                        className="button"
                        onClick={onCancelClick}>
                            Cancel
                    </button>
                    <button
                        className="button"
                        onClick={onSubmit}>
                            Submit
                    </button>
                </div>
            </div>
        );
    }
};

export default Buttons;