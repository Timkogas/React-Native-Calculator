import styled from 'styled-components';

const ButtonWrapper = styled.TouchableOpacity`
  flex-basis: 24%;
  height: 120px;
  align-items: center;
  margin: 1px;
  justify-content: center;
`

const ButtonWrapperNumber = styled(ButtonWrapper)`
  background-color: green;
`
const ButtonWrapperNotNumber = styled(ButtonWrapper)`
  background-color: orange;
`
const ButtonWrapperEquallyAndClear = styled(ButtonWrapper)`
  background-color: blue;
  flex-basis: 49%;
`
const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`


export default function ButtonCalculator({value, onPressHandler}) {
  if (value !== '=' && value !== 'C') {
    if (isNaN(value)) {
      return  (
      <ButtonWrapperNotNumber onPress={onPressHandler}>
        <ButtonText>{value}</ButtonText>
      </ButtonWrapperNotNumber>
      )
    } else {
      return (
        <ButtonWrapperNumber onPress={onPressHandler}>
          <ButtonText>{value}</ButtonText>
        </ButtonWrapperNumber>
      )
    }
  } else {
    return (
    <ButtonWrapperEquallyAndClear onPress={onPressHandler}>
      <ButtonText>{value}</ButtonText>
    </ButtonWrapperEquallyAndClear>
    )
  }
  return (<></>)
}
