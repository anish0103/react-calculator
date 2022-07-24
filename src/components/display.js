import React from 'react';
import './css/display.css'
import { motion } from 'framer-motion'

const display = (Probs) => {
    let content;
    if (Probs.displayvalue === '') {
        content = '0';
    } else {
        content = Probs.displayvalue;
    }

    return (
        <div className='displaycontainer'>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
                className='number'
            >
                {content}
            </motion.div>
        </div>
    );
}

export default display;