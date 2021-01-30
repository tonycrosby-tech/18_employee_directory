import React from "react";
import "../styles/Wrapper.css"

function Wrapper({ children }) {
    return (
        <div className='wrapper mt-5'>
            { children }
        </div>
    );
}

export default Wrapper;