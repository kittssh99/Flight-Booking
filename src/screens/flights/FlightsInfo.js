import React from 'react';
import PropTypes from 'prop-types';
import {
  FlightsInfoCard,
  FlightInfoWrapper,
  FlightText,
  FlightIconWrapper,
  FlightLabelText,
  FlightSmallText,
  FlightPriceText,
  FlightPriceWrapper,
  FlightInfoContainer,
  FlightIcon,
} from './FlightsInfo.style';
import {View} from 'react-native';

const FlightsInfo = React.memo(({item}) => {
  return (
    <FlightsInfoCard>
      <FlightInfoContainer>
        <FlightIconWrapper>
          <FlightIcon name="aircraft" size={30} color="blue" />
          <FlightSmallText> {item.displayData.totalDuration}</FlightSmallText>
          <FlightSmallText> {item.displayData.stopInfo}</FlightSmallText>
        </FlightIconWrapper>
        <View>
          <FlightText>{item.displayData.airlines[0].airlineName} </FlightText>

          <FlightInfoWrapper>
            <FlightLabelText> From: </FlightLabelText>
            <FlightText>
              {`${item.displayData.source.airport[0].cityName} (${item.displayData.source.airport[0].cityCode})`}
            </FlightText>
          </FlightInfoWrapper>

          <FlightInfoWrapper>
            <FlightLabelText> To: </FlightLabelText>
            <FlightText>
              {`${item.displayData.destination.airport[0].cityName} (${item.displayData.destination.airport[0].cityCode})`}
            </FlightText>
          </FlightInfoWrapper>
        </View>
        <FlightPriceWrapper>
          <FlightPriceText>{`₹ ${item.fare}`} </FlightPriceText>
        </FlightPriceWrapper>
      </FlightInfoContainer>
    </FlightsInfoCard>
  );
});

FlightsInfo.propTypes = {
  item: PropTypes.shape({}),
};

export default FlightsInfo;
