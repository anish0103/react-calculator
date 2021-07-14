import React, { useState } from 'react';
import Display from './components/display'
import './components/css/mainapp.css'
import Buttoncontainer from './components/buttoncontainer'

function App() {

  const [value, setvalue] = useState('')

  const btnclickhandler = (data) => {
    if (data.target.value === 'C') {
      setvalue('')
    } else if (data.target.value === '=') {
      try {
        let result = value;
        let displayresult = eval(result);
        setvalue(displayresult);
      } catch (error) {
        setvalue('Error');
        return
      }
    } else if (data.target.value === 'CE') {
      let str = value;
      let newStr = str.slice(0, -1);
      setvalue(newStr);
    } else {
      setvalue((prev) => {
        return prev + data.target.value;
      })
    }
  }

  return (
    <div className='cal'>
      <Display displayvalue={value} />
      <Buttoncontainer btnhandler={btnclickhandler} />
    </div>
  );
}

export default App;
