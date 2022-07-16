import React from 'react';
import Field from '../components/Field';
import styled from 'styled-components';
import ButtonCalculator from '../components/ButtonCalculator';
import { useState } from 'react';

const CalculatorWrapper = styled.ScrollView`
  margin-top: 60px;
  padding: 0 5px;
`
const ButtonsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

export default function Calculator() {
  const buttons = [7,8,9,'+',4,5,6,'-',1,2,3,'*','.',0,'<','/','=','C']
  const [expression, setExpression] = useState('')

  const lastSymbol = () => {
    const s = expression.toString().split("").reverse().join("")
    return s[0];
  }

  const onPressHandler = (value) => {
    if (value !== '=' && value !== '<' && value!== 'C')  {
      if (value !== '-' && value !== '*' && value !== '/' && value !== '+' && value !== '.' && isNaN(lastSymbol())) {
        setExpression((prevState)=>{return prevState+value})
      } else if (!isNaN(lastSymbol())) {
        setExpression((prevState)=>{return prevState+value})
      }
    } else if (value === '<') {
      const expressionDeletedSymbol = expression.toString().slice(0, -1)
      setExpression(expressionDeletedSymbol)
    } else if (value === '=') {
      try {
        eval(expression)
        const calculated = eval(expression)
        setExpression(calculated)
      } catch {
        setExpression('Error')
      }
      
    } else if (value === 'C') {
      setExpression('') 
    }
  }

  return (
    <CalculatorWrapper vertical={true}>
      <Field
        expression={expression}
      />
      <ButtonsWrapper>
      {buttons.map((button,i)=>{
          return (
            <ButtonCalculator
              key={i}
              value={button}
              onPressHandler={()=>{onPressHandler(button)}}
            />
          )
        })}
      </ButtonsWrapper>
    </CalculatorWrapper>
  );
}
