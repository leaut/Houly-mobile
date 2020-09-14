import {TextInputProps} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface Props extends TextInputProps {
  Icon: React.FC<SvgProps>;
  PasswordIcon?: React.FC<SvgProps>;
  first: boolean;
}
