import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";

export default function Main() {
    return (
        <div className="main-page">
            <Link
                className="color-picker-link"
                to="/color-picker">
                    Go to Color Picker App
            </Link>
        </div>
    );
}