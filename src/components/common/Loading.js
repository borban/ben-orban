import React, {Suspense} from 'react';
import "./Loading.css";

const Loading = (Component) => {
    return props => (
        <Suspense fallback={<div className="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>}>
            <Component {...props}/>
        </Suspense>
    );
};

export default Loading;
