import React from 'react';
import './css/display.css'

const display = (Probs) => {
    let content;
    if(Probs.displayvalue===''){
        content = '0';
    } else {
        content = Probs.displayvalue;
    }

    return (
        <div className='displaycontainer'>
            <div className='number'>
                {content}
            </div>
        </div>
    );
}

export default display;