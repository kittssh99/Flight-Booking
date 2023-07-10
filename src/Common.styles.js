import styled from 'styled-components/native';

export const FieldContainer = styled.View`
  margin-top: 5px;
  margin-bottom: ${props => {
    props.hasError ? '-5px' : '0px';
  }};
`;
