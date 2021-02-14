import React from "react";

import "./custom-button.styles.scss"

const CustomButton = ({children,inverted, ...others}) => (
    <button className={` ${inverted ? "inverted" : ""} custom-button `} {...others}>
        {children}
    </button>
)

export default CustomButton;