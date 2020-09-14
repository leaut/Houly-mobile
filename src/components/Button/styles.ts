import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;

  top: 90%;
  width: 28%;
  height: 28%;

  justify-content: center;
  align-items: center;

  elevation: 10;
`;

export const ButtonContainer = styled.TouchableOpacity`
  position: relative;

  background: transparent;

  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-family: 'FredokaOne-Regular';

  color: #f2f2f2;
`;
