import React from "react";
import "./Sliders.css";

export default class Sliders extends React.Component {
    state = {
        hide: false
    };

    onSlidersBlockToggle = () => {
        this.setState((state) => {
            return {
                hide: !state.hide
            }
        });
    };

    onCancelClick = () => {
        this.setState({
            hide: true
        });
        this.props.onCancel();
    };

    render() {
        const {red, green, blue} = this.props.value;
        const { onChange, onSubmit } = this.props;
        const {hide} = this.state;
        let classNames = "sliders";

        if(hide) {
            classNames += " hide";
        }

        return (
            <div className="sliders-block">
                <div className={classNames}>
                    <div className="slider slider-red">
                        <input
                        type="range"
                        min="0"
                        max="255"
                        value={red}
                        name="red"
                        onChange={onChange}
                        />
                        <span>R: {red}</span>
                    </div>

                    <div className="slider slider-green">
                        <input
                        type="range"
                        min="0"
                        max="255"
                        value={green}
                        name="green"
                        onChange={onChange}
                        />
                        <span>G: {green}</span>
                    </div>

                    <div className="slider slider-blue">
                        <input
                        type="range"
                        min="0"
                        max="255"
                        value={blue}
                        name="blue"
                        onChange={onChange}
                        />
                        <span>B: {blue}</span>
                    </div>
                </div>
                <div className="buttons-block">
                    <input
                        className="btn btn-hide-show"
                        type="button"
                        onClick={this.onSlidersBlockToggle}
                        value="Hide/Show" />
                    <input
                        className="btn btn-cancel"
                        type="button"
                        onClick={this.onCancelClick}
                        value="Cancel" />
                    <input
                        className="btn btn-submit"
                        type="button"
                        onClick={onSubmit}
                        value="Submit" />
                </div>
            </div>
        )
    };
}
