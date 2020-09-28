import React, {useState, useRef, useCallback} from 'react';
import {Platform, KeyboardAvoidingView, TextInputProps} from 'react-native';

import api from '../../services/api';

import InputText from '../../components/TextInput';
import InputSelect from '../../components/SelectInput';
import Button from '../../components/Button';

import validationSignIn from '../../validations/SignIn';

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

  const [selectedPhysicalPerson, setSelectedPhysicalPerson] = useState('#000')
  const [selectedOng, setSelectedOng] = useState('transparent')

  const EmailInputRef = useRef<TextInputProps>(null);
  const PasswordInputRef = useRef<TextInputProps>(null);

  const handleSubmitSignIn = useCallback(() => {
    const email = EmailInputRef.current?.value;
    // const password = PasswordInputRef.current?.value;

    console.log({email});

    // try {
    //   await validationSignIn.validate({email, password});
    // } catch (error) {}
  }, []);

  function handleOptionAccount() {
    if (selectedLoginAccount) {
      return;
    }
    setSelectedLoginAccount(true);
    setSelectedNewAccount(false);
  }

  function handleOptionAccount2() {
    if (selectedNewAccount) {
      return;
    }
    setSelectedNewAccount(true);
    setSelectedLoginAccount(false);
  }


  function handleInputRadioUser() {
    if (selectedOng === 'transparent' && selectedPhysicalPerson === '#000') {
      setSelectedOng('#000')
      setSelectedPhysicalPerson('transparent')
    }

    if (selectedOng === '#000' && selectedPhysicalPerson === 'transparent') {
      setSelectedOng('transparent')
      setSelectedPhysicalPerson('#000')
    }
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
                onPress={handleOptionAccount2}>
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
                  ref={EmailInputRef}
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
                  ref={PasswordInputRef}
                />
              </LoginCard>

              <Button text="Entrar" onPress={handleSubmitSignIn} />
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
                onPress={handleOptionAccount2}>
                <OptionAccountText selected={selectedNewAccount}>
                  Nova conta
                </OptionAccountText>
              </OptionAccountButton>
            </OptionAccountContainer>

            <LoginContainer>
              <LoginCard>
                <InputSelect first={true} label="Pessoa Física" color={selectedPhysicalPerson} callback={handleInputRadioUser} />
                <InputSelect first={false} label="ONG" color={selectedOng} callback={handleInputRadioUser}/>
              </LoginCard>

              <Button
                text="Confirmar"
                onPress={() => console.log('confirmar')}
              />
            </LoginContainer>
          </KeyboardAvoidingView>
          <ForgotPasswordContainer onPress={() => {}}>
            <ForgotPasswordText />
          </ForgotPasswordContainer>
        </>
      )}
    </Container>
  );
};

export default Login;
