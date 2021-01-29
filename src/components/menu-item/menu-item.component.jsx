import React from "react";
import "./menu-item.styles.scss";
import {withRouter} from "react-router-dom";

const MenuItem = ({title, imageUrl, size,linkUrl,history,match }) => (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className="background-image"
        />
        <div className="item-content">
            <h1 className="item-title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);