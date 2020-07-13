import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import CurrencyInput from 'react-currency-input';

function Another({history}) {

  const currencyInput = useRef(null);
  const [typedValue, setTypedValue] = useState(0);

  function onTypedValueChanged(event, maskedvalue, floatvalue) {
    setTypedValue(floatvalue);
  }

  useEffect(() => {
    console.log(currencyInput);
    //currencyInput.current.click();
  }, []);

  return (
    <>
      <h1>I'm another</h1>
      <CurrencyInput       
        prefix="R$ " 
        decimalSeparator="," 
        thousandSeparator="." 
        value={typedValue} 
        onChangeEvent={onTypedValueChanged}
        pattern="[0-9]*" 
        inputMode="decimal" 
        autoFocus={true} />
      <br /><br />
      <input         
        pattern="[0-9]*"
        inputMode="decimal" 
        type="text"
        ref={currencyInput}>  
      </input>
      <br /><br />
      <button onClick={() => {history.push('/')}}>Home push</button>
      <br /><br />
      <button onClick={() => {history.replace('/')}}>Home replace</button>
    </>

  );
}

export default Another;
