import styled from 'styled-components/native';

const StyledSafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: 10px;
`;
const StyledSwitchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 10pc;
`;
const StyledSwitchWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export {StyledSafeAreaContainer, StyledSwitchContainer, StyledSwitchWrapper};
