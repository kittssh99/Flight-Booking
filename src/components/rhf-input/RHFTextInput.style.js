import styled from 'styled-components/native';

const StyledTextInputContainer = styled.View`
  margin: 10px;
  background-color: white;
  border-color: ${props => (props.error ? 'red' : '#e8e8e8')};
  border-width: 1px;
  border-radius: 5px;
  padding-horizontal: 10px;
  margin-vertical: 5px;
  flex-direction: row;
`;

const StyledErrorText = styled.Text`
  color: red;
  align-self: stretch;
  margin-left: 10px;
`;
const StyledIconWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

const StyledTextInput = styled.TextInput`
  margin-left: 6px;
`;

export {
  StyledTextInputContainer,
  StyledErrorText,
  StyledTextInput,
  StyledIconWrapper,
};
