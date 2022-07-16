import {ScrollView } from 'react-native';
import styled from 'styled-components';

const FieldText = styled.Text`
  font-size: 30px;
`
const FieldWrapper = styled.View`
  height: 60px;
`


export default function Field() {

  return (
    <FieldWrapper>
      <ScrollView
        horizontal={true}
      >
        <FieldText numberOfLines={1}>Open up !!</FieldText>
      </ScrollView>
    </FieldWrapper>
  );
}

