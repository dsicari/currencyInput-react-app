import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './style.css';
import CurrencyInput from 'react-currency-input';

function Home({history}) {

  const currencyInput = useRef(null);
  const input = useRef(null);
  const btn = useRef(null);
  const [typedValue, setTypedValue] = useState(0);

  function onTypedValueChanged(event, maskedvalue, floatvalue) {
    setTypedValue(floatvalue);
  }

  useLayoutEffect(() => {
    setTimeout(() => {input.current.focus();input.current.click();}, 4000);
  }, []);

  useEffect(() => {
    console.log('useEffect currencyInput', currencyInput);
    console.log('useEffect btn', btn);    
    //history.replace('/another');
  }, []);

  return (
    <>
      <h1>Home</h1>
      <CurrencyInput       
        prefix="R$ " 
        decimalSeparator="," 
        thousandSeparator="." 
        value={typedValue} 
        onChangeEvent={onTypedValueChanged}
        pattern="[0-9]*" 
        inputMode="decimal" 
        ref={currencyInput} />
      <br /><br />
      <input
        type="text"
        ref={input}>  
      </input>
      <br /><br />
      <button onClick={() => {history.push('/another')}} ref={btn}>Another push</button>
      <br /><br />
      <button onClick={() => {history.replace('/another')}}>Another replace</button>
    </>

  );
}

export default Home;
