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

export const Select = styled.View`
  /* height: 100%; */
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;

export const SelectLabel = styled.Text`
  font-family: 'FredokaOne-Regular';
  font-size: 13px;
  line-height: 16px;

  color: #828282;
`;
