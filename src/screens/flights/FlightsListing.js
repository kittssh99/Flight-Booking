import React, {useEffect, useState, useReducer} from 'react';
import {FlatList, Pressable, Text, Switch} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import FlightsInfo from './FlightsInfo';
import {HeaderBackButton} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import useFilter from '../../hooks/useFilter';
import {reset} from '../../reducers/FlightSlice';
import {dispatchAction} from '../../actions/Action';
import {ACTIONS} from '../../constants/string-constants';
import {
  StyledSafeAreaContainer,
  StyledSwitchContainer,
  StyledSwitchWrapper,
} from './FlightsListing.style';

const {LOW_TO_HIGH, HIGH_TO_LOW, UPDATE_FLIGHTS, RESET} = ACTIONS;

const FlightListing = () => {
  const dispatchReset = useDispatch();
  const getFlightsState = state => state.flights;
  const flights = useSelector(rootState => getFlightsState(rootState));
  const navigation = useNavigation();
  const {lowToHighFilter, highToLowFilter} = useFilter();
  const [isEnabled, setIsEnabled] = useState(false);
  const [flightsData, dispatch] = useReducer(reducer, []);

  const renderHeaderBackIcon = props => (
    <HeaderBackButton
      {...props}
      onPress={() => {
        dispatchReset(reset());
        navigation.goBack();
      }}
    />
  );

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: renderHeaderBackIcon,
    });
  });

  useEffect(() => {
    dispatchAction(UPDATE_FLIGHTS, dispatch);
  }, [flights.data]);

  useEffect(() => {
    if (flightsData) {
      if (isEnabled) {
        dispatchAction(LOW_TO_HIGH, dispatch);
      } else {
        dispatchAction(HIGH_TO_LOW, dispatch);
      }
    }
  }, [isEnabled]);

  function reducer(state, action) {
    switch (action.type) {
      case UPDATE_FLIGHTS:
        return flights.data;
      case LOW_TO_HIGH:
        return lowToHighFilter(state);
      case HIGH_TO_LOW:
        return highToLowFilter(state);
      case RESET:
        return flights.data;
      default:
        throw new Error(`Unhandled expression in switch: ${action.type}`);
    }
  }

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const renderItem = ({item}) => <FlightsInfo item={item} />;

  return (
    <StyledSafeAreaContainer>
      <StyledSwitchContainer>
        <StyledSwitchWrapper>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? 'blue' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>{isEnabled ? 'Price Low to High' : 'Price High To Low'} </Text>
        </StyledSwitchWrapper>

        <Pressable
          onPress={() => {
            dispatchAction(RESET, dispatch);
          }}>
          <Text>Clear Filter </Text>
        </Pressable>
      </StyledSwitchContainer>
      <FlatList
        data={flightsData}
        extraData={flightsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </StyledSafeAreaContainer>
  );
};

export default FlightListing;
