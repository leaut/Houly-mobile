import React, {forwardRef, useState} from 'react';
import {TextInputProps, TouchableOpacity} from 'react-native';

import {Input, Container} from './styles';

import {Props} from './index.d';

const TextInput: React.ForwardRefRenderFunction<TextInputProps, Props> = (
  {Icon, PasswordIcon, first, ...rest},
  ref,
) => {
  const [secureText, setSecureText] = useState(true);

  const handlePasswordView = () => {
    setSecureText((state) => !state);
  };

  return (
    <Container first={first}>
      <Icon width={24} height={24} />
      <Input ref={ref} {...rest} secureTextEntry={secureText} />

      {PasswordIcon ? (
        <TouchableOpacity onPress={handlePasswordView}>
          <PasswordIcon width={24} height={24} />
        </TouchableOpacity>
      ) : undefined}
    </Container>
  );
};

export default forwardRef(TextInput);
