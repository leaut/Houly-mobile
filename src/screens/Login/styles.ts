import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

interface PropsSelected {
  selected: Boolean;
}

const {height, width} = Dimensions.get('window');

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const OptionAccountContainer = styled.View`
  width: ${width - 100}px;
  height: ${height / 12}px;

  margin-top: 10%;

  background: rgba(51, 51, 51, 0.38);
  border-radius: 42px;

  justify-content: space-between;
  align-items: center;

  flex-direction: row;

  padding: 0 8px;
`;

export const OptionAccountButton = styled.TouchableHighlight`
  background: ${(props: PropsSelected) =>
    props.selected ? '#FFF' : 'transparent'};

  flex: 1;

  height: 80%;

  border-radius: 43px;

  align-items: center;
  justify-content: center;
`;

export const OptionAccountText = styled.Text`
  font-family: 'FredokaOne-Regular';
  font-size: 13px;
  line-height: 16px;

  color: ${(props: PropsSelected) => (props.selected ? '#333' : '#f2f2f2')};
`;

export const LoginContainer = styled.View`
  justify-content: center;
  align-items: center;

  margin-top: 7%;
`;

export const LogoContainer = styled.View`
  margin-top: 4px;
  align-items: center;
  justify-content: center;
`;

export const LoginCard = styled.View`
  width: ${width - 100}px;
  height: ${height / 5}px;

  background: #f2f2f2;
  border-radius: 10px;

  padding: 7px;

  justify-content: space-between;

  elevation: 10;
`;

export const ForgotPasswordContainer = styled.TouchableOpacity`
  margin-top: 14%;

  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'FredokaOne-Regular';
  font-size: 13px;

  color: #f2f2f2;

  text-decoration-line: underline;
`;
