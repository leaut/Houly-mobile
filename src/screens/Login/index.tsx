import React, {useState} from 'react';
import {Platform, KeyboardAvoidingView} from 'react-native';

import InputText from '../../components/TextInput';
import InputSelect from '../../components/SelectInput';
import Button from '../../components/Button';

import MailIcon from '../../assets/icons/mail.svg';
import KeyIcon from '../../assets/icons/key.svg';
import EyeIcon from '../../assets/icons/eye.svg';
import LogoIcon from '../../assets/icons/logo.svg';

import {
  Container,
  LoginCard,
  LoginContainer,
  LogoContainer,
  OptionAccountContainer,
  OptionAccountButton,
  OptionAccountText,
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
      {selectedLoginAccount ? (
        <>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled>
            <LogoContainer>
              <LogoIcon />
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
                <InputText
                  Icon={MailIcon}
                  first={true}
                  placeholder="Email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                  returnKeyType="next"
                />

                <InputText
                  first={false}
                  Icon={KeyIcon}
                  PasswordIcon={EyeIcon}
                  placeholder="Senha"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="password"
                  returnKeyType="send"
                  secureTextEntry={true}
                />
              </LoginCard>

              <Button text="Entrar" onPress={() => console.log('entrar')} />
            </LoginContainer>
          </KeyboardAvoidingView>
          <ForgotPasswordContainer onPress={() => {}}>
            <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
          </ForgotPasswordContainer>
        </>
      ) : (
        <>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled>
            <LogoContainer>
              <LogoIcon />
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
                <InputSelect first={true} label="Pessoa Física" />
                <InputSelect first={false} label="ONG" />
              </LoginCard>

              <Button
                text="Confirmar"
                onPress={() => console.log('confirmar')}
              />
            </LoginContainer>
          </KeyboardAvoidingView>
        </>
      )}
    </Container>
  );
};

export default Login;
