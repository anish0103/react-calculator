import React from 'react';
import './css/buttoncontainer.css';
import { motion } from 'framer-motion';

const buttoncontainer = (Probs) => {
    const TableVariant = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            }
        }
    }
    const ButtonVariant = {
        hidden: {
            y: 40,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 350
            }
        }
    }

    return (
        <div className='btncontainer'>
            <div onClick={Probs.btnhandler}>
                <motion.button variants={ButtonVariant}
                    initial="hidden"
                    animate="show"
                    whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                    style={{ float: 'right', position: 'relative', right: '3%', color: '#b6b6b6', backgroundColor: '#1c1a1d' }} value='CE'>
                    CE
                </motion.button>
            </div>
            <motion.table
                variants={TableVariant}
                initial="hidden"
                animate="show"
                className='btntable'>
                <tr>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            className='grey' value='(' onClick={Probs.btnhandler}>
                            (
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value=')' onClick={Probs.btnhandler} className='grey'>
                            )
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='%' onClick={Probs.btnhandler} className='grey'>
                            %
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='/' onClick={Probs.btnhandler} className='orange'>
                            /
                        </motion.button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='7' onClick={Probs.btnhandler}>
                            7
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='8' onClick={Probs.btnhandler}>
                            8
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }} value='9' onClick={Probs.btnhandler}>
                            9
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }} value='*' onClick={Probs.btnhandler} className='orange'>
                            x
                        </motion.button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='4' onClick={Probs.btnhandler}>
                            4
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='5' onClick={Probs.btnhandler}>
                            5
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='6' onClick={Probs.btnhandler}>
                            6
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='-' onClick={Probs.btnhandler} className='orange'>
                            -
                        </motion.button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='1' onClick={Probs.btnhandler}>
                            1
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='2' onClick={Probs.btnhandler}>
                            2
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='3' onClick={Probs.btnhandler}>
                            3
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='+' onClick={Probs.btnhandler} className='orange'>
                            +
                        </motion.button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='C' onClick={Probs.btnhandler}>
                            C
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='0' onClick={Probs.btnhandler}>
                            0
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='.' onClick={Probs.btnhandler}>
                            .
                        </motion.button>
                    </td>
                    <td>
                        <motion.button variants={ButtonVariant}
                            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                            value='=' onClick={Probs.btnhandler} className='orange'>
                            =
                        </motion.button>
                    </td>
                </tr>
            </motion.table>
        </div>
    );
}

export default buttoncontainer;