import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';

const FlightsInfoCard = styled.View`
  margin: 10px;
  background-color: white;
  border-radius: 10px;
  border-color: white;
  border-width: 1px;
  min-height: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
`;

const FlightInfoContainer = styled.View`
  flex-direction: row;
`;
const FlightInfoWrapper = styled.View`
  flex-direction: row;
  flex: 1;
`;

const FlightText = styled.Text`
  font-size: 16px;
`;

const FlightLabelText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const FlightIconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex: 0.8;
  max-width: 100px;
`;
const FlightSmallText = styled.Text`
  font-size: 10px;
`;

const FlightPriceWrapper = styled.View`
  justify-content: center;
  flex: 1;
`;

const FlightPriceText = styled.Text`
  font-size: 18px;
  color: green;
  align-self: right;
  text-align: right;
  margin-right: 10px;
`;

const FlightIcon = styled(Icon)`
  margin-bottom: 10px;
`;

export {
  FlightsInfoCard,
  FlightInfoWrapper,
  FlightInfoContainer,
  FlightText,
  FlightIconWrapper,
  FlightLabelText,
  FlightSmallText,
  FlightPriceText,
  FlightPriceWrapper,
  FlightIcon,
};
