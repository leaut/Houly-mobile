/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Props} from './index.d';

import {ButtonContainer, Container, TextButton} from './styles';

const Button: React.FC<Props> = ({text, ...rest}) => {
  return (
    <Container>
      <ButtonContainer {...rest}>
        <LinearGradient
          colors={['rgba(12, 233, 106, 0.99)', '#197C43']}
          style={{
            flex: 1,
            borderRadius: 5,
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
        <TextButton>{text}</TextButton>
      </ButtonContainer>
    </Container>
  );
};

export default Button;
