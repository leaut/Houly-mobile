import React from 'react';
import {View} from 'react-native';

import {Props} from './index.d';

import {Container, Select, SelectLabel} from './styles';

const SelectInput: React.FC<Props> = ({first, label}) => {
  return (
    <Container first={first}>
      <Select>
        <SelectLabel>{label}</SelectLabel>

        <View
          style={{
            backgroundColor: '#828282',
            borderRadius: 100,
            width: 20,
            height: 20,
          }}
        />
      </Select>
    </Container>
  );
};

export default SelectInput;
