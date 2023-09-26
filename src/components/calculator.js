import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  max-width: 650px;
  flex-wrap: wrap;
  margin: 0 auto;
`

const InputNum = styled.input`
  width: 650px;
  padding: 10px 5px;
  border: none;
  background: grey;
  border-radius: 10px;
  margin: 5px 0;
  color: #fff;
  font-size: 100px;
`

const P = styled.p`
  font-size: 150px;
  color: red;
`

export default function Calculator() {
  const [value1, setValue1] = useState(0);
  const [value, setValueOp] = useState('');
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    switch (value) {
      case "+":
        setResult(value1 + value2);
        break;
      case "-":
        setResult(value1 - value2);
        break;
      case "*":
        setResult(value1 * value2);
        break;
      case "/":
        setResult(value1 / value2);
        break;
      case "**":
        setResult(value1 ** value2);
        break;
      case "%":
        setResult(value1 % value2);
        break;
      default:
        break;
    }
  }, [value1, value, value2]);

  return (
    <Div>
        <InputNum type={"text"} onChange={(e) => setValue1(parseInt(e.target.value))}></InputNum>
        <InputNum type={"text"} onChange={(e) => setValueOp(e.target.value)}></InputNum>
        <InputNum type={"text"} onChange={(e) => setValue2(parseInt(e.target.value))}></InputNum>
        <P>{result}</P>
    </Div>
  );
}
