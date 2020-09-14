import React from 'react';

import {Props} from './index.d';

import {Container, Select, SelectLabel} from './styles';

const SelectInput: React.FC<Props> = ({first, label}) => {
  return (
    <Container first={first}>
      <Select>
        <SelectLabel>{label}</SelectLabel>
      </Select>
    </Container>
  );
};

export default SelectInput;
