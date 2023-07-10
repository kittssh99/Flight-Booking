import React from 'react';
import {Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Entypo';

import {
  StyledTextInputContainer,
  StyledErrorText,
  StyledTextInput,
  StyledIconWrapper,
} from './RHFTextInput.style';

const RHFTextInput = ({
  control,
  name,
  rules = {},
  placeholder,
  editable,
  customValue,
  iconName,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <StyledTextInputContainer error={error}>
            <StyledIconWrapper>
              <Icon name={iconName} size={30} color="blue" />
            </StyledIconWrapper>
            <StyledTextInput
              value={customValue ? customValue : value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              editable={editable}
            />
          </StyledTextInputContainer>
          {error && (
            <StyledErrorText>{error.message || 'Error'}</StyledErrorText>
          )}
        </>
      )}
    />
  );
};

export default RHFTextInput;
