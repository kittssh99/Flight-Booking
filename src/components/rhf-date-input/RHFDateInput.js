import React from 'react';
import {Controller} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  StyledTextInputContainer,
  StyledErrorText,
} from '../rhf-input/RHFTextInput.style';

const RHFDateInput = ({control, name, rules = {}, placeholder}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <StyledTextInputContainer error={error}>
            <DateTimePicker />
          </StyledTextInputContainer>
          {error && (
            <StyledErrorText>{error.message || 'Error'}</StyledErrorText>
          )}
        </>
      )}
    />
  );
};

export default RHFDateInput;
