/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Platform, KeyboardAvoidingView} from 'react-native';

import InputText from '../../components/TextInput';

import {
  Container,
  LoginCard,
  Logo,
  LoginContainer,
  LogoContainer,
  OptionAccountContainer,
  OptionAccountButton,
  OptionAccountText,
  Division,
  ButtonContainer,
  Button,
  TextButton,
  ForgotPasswordContainer,
  ForgotPasswordText,
} from './styles';

const Login: React.FC = () => {
  const [selectedLoginAccount, setSelectedLoginAccount] = useState(true);
  const [selectedNewAccount, setSelectedNewAccount] = useState(false);

  function handleOptionAccount() {
    setSelectedLoginAccount((prevState) => !prevState);
    setSelectedNewAccount((prevState) => !prevState);
  }

  return (
    <Container source={require('../../assets/img/background.jpg')}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <LogoContainer>
          <Logo source={require('../../assets/img/logo.png')} />
        </LogoContainer>

        <OptionAccountContainer>
          <OptionAccountButton
            selected={selectedLoginAccount}
            onPress={handleOptionAccount}>
            <OptionAccountText selected={selectedLoginAccount}>
              Já possuo conta
            </OptionAccountText>
          </OptionAccountButton>

          <OptionAccountButton
            selected={selectedNewAccount}
            onPress={handleOptionAccount}>
            <OptionAccountText selected={selectedNewAccount}>
              Nova conta
            </OptionAccountText>
          </OptionAccountButton>
        </OptionAccountContainer>

        <LoginContainer>
          <LoginCard>
            <InputText name="email" placeholder="Email" />
            <Division />
            <InputText name="password" placeholder="Senha" />
          </LoginCard>
          <ButtonContainer>
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
            <Button onPress={() => {}}>
              <TextButton>Entrar</TextButton>
            </Button>
          </ButtonContainer>
        </LoginContainer>
      </KeyboardAvoidingView>
      <ForgotPasswordContainer onPress={() => {}}>
        <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
      </ForgotPasswordContainer>
    </Container>
  );
};

export default Login;
