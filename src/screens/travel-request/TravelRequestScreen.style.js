import styled from 'styled-components/native';
import {Pressable, View} from 'react-native';

const StyledSafeAreaContainer = styled.SafeAreaView``;

const StyledViewWrapper = styled(View)`
  background-color: transparent;
  margin: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: grey;
`;
const StyledTouchableWrapper = styled(Pressable)`
  background-color: transparent;
`;

const StyledSearchFlightButton = styled(Pressable)`
  background-color: blue;
  margin: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: grey;
`;

const StyledSearchFlights = styled.Text`
  padding: 16px;
  color: white;
  align-self: center;
`;

export {
  StyledSafeAreaContainer,
  StyledViewWrapper,
  StyledTouchableWrapper,
  StyledSearchFlightButton,
  StyledSearchFlights,
};
