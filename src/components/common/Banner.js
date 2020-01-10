import React from 'react';
import "./Banner.css";

const Banner = props => {
    return (
        <div className="Banner">
            <div className="BannerContent">
                {props.children}
            </div>
        </div>
    );
};

export default Banner;
