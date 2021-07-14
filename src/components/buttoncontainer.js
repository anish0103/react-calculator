import React from 'react';
import './css/buttoncontainer.css';

const buttoncontainer = (Probs) => {
    return (
        <div className='btncontainer'>
            <div onClick={Probs.btnhandler}>
                <button style={{float: 'right' , position: 'relative', right: '3%', color: '#b6b6b6', backgroundColor: '#1c1a1d'}} value='CE'>CE</button>
            </div>
            <table className='btntable'>
                <tr>
                    <td>
                        <button className='grey' value='(' onClick={Probs.btnhandler}>(</button>
                    </td>
                    <td>
                        <button value=')' onClick={Probs.btnhandler} className='grey'>)</button>
                    </td>
                    <td>
                        <button value='%' onClick={Probs.btnhandler} className='grey'>%</button>
                    </td>
                    <td>
                        <button value='/' onClick={Probs.btnhandler} className='orange'>/</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button value='7' onClick={Probs.btnhandler}>7</button>
                    </td>
                    <td>
                        <button value='8' onClick={Probs.btnhandler}>8</button>
                    </td>
                    <td>
                        <button value='9' onClick={Probs.btnhandler}>9</button>
                    </td>
                    <td>
                        <button value='*' onClick={Probs.btnhandler} className='orange'>x</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button value='4' onClick={Probs.btnhandler}>4</button>
                    </td>
                    <td>
                        <button value='5' onClick={Probs.btnhandler}>5</button>
                    </td>
                    <td>
                        <button value='6' onClick={Probs.btnhandler}>6</button>
                    </td>
                    <td>
                        <button value='-' onClick={Probs.btnhandler} className='orange'>-</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button value='1' onClick={Probs.btnhandler}>1</button>
                    </td>
                    <td>
                        <button value='2' onClick={Probs.btnhandler}>2</button>
                    </td>
                    <td>
                        <button value='3' onClick={Probs.btnhandler}>3</button>
                    </td>
                    <td>
                        <button value='+' onClick={Probs.btnhandler} className='orange'>+</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button value='C' onClick={Probs.btnhandler}>C</button>
                    </td>
                    <td>
                        <button value='0' onClick={Probs.btnhandler}>0</button>
                    </td>
                    <td>
                        <button value='.' onClick={Probs.btnhandler}>.</button>
                    </td>
                    <td>
                        <button value='=' onClick={Probs.btnhandler} className='orange'>=</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default buttoncontainer;