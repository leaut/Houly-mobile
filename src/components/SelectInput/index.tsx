import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';


import {Props} from './index.d';

import {Container, Select, SelectLabel} from './styles';

const SelectInput: React.FC<Props> = ({first, label, color, callback}) => {
  return (
    <Container first={first}>
      <Select>
        <SelectLabel>{label}</SelectLabel>
      <TouchableOpacity onPress={callback}>
        <View
          style={{
            backgroundColor: '#828282',
            borderRadius: 100,
            width: 20,
            height: 20,
          }}
        >
          <View
            style={{
              backgroundColor: color,
              borderRadius: 100,
              width: 10,
              height: 10,
              margin: 5
            }}
          />
        </View>
      </TouchableOpacity>
      </Select>
    </Container>
  );
};

export default SelectInput;
