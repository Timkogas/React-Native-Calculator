import Field from '../components/Field';
import styled from 'styled-components';
import ButtonCalculator from '../components/ButtonCalculator';

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

  return (
    <CalculatorWrapper vertical={true}>
      <Field/>
      <ButtonsWrapper>
      {buttons.map((button,i)=>{
          return (
            <ButtonCalculator
              key={i}
              value={button}
            />
          )
        })}
      </ButtonsWrapper>
    </CalculatorWrapper>
  );
}
