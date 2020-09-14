import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

interface PropsInputStyle {
  first: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: center;
  padding-horizontal: 5px;

  border-top-width: ${({first}: PropsInputStyle) =>
    !first ? StyleSheet.hairlineWidth : 0}px;
  border-top-color: ${({first}: PropsInputStyle) =>
    !first ? '#828282' : 'transparent'};
`;

export const Input = styled.TextInput`
  height: 100%;
  flex: 1;
  /* justify-content: space-between; */
  margin-left: 10px;

  font-family: 'FredokaOne-Regular';
  font-size: 13px;
  line-height: 16px;
`;

export const ViewPassword = styled.TouchableOpacity``;
