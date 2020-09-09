import React from 'react';

import {Input} from './styles';

import {Props} from './index.d';

const TextInput: React.FC<Props> = ({name, label, ...rest}) => {
  return <Input {...rest} />;
};

export default TextInput;
