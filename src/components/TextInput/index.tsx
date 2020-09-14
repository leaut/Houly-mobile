import React, {useState, useEffect} from 'react';

import {Input, Container} from './styles';

import {Props} from './index.d';
import {TouchableOpacity} from 'react-native';

const TextInput: React.FC<Props> = ({Icon, PasswordIcon, first, ...rest}) => {
  const [secureText, setSecureText] = useState(false);

  const handlePasswordView = () => {
    setSecureText((state) => !state);
  };

  return (
    <Container first={first}>
      <Icon width={24} height={24} />
      <Input {...rest} secureTextEntry={secureText} />
      {PasswordIcon ? (
        <TouchableOpacity onPress={handlePasswordView}>
          <PasswordIcon width={24} height={24} />
        </TouchableOpacity>
      ) : undefined}
    </Container>
  );
};

export default TextInput;
