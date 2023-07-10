import React, {useState, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RHFTextInput from '../../components/rhf-input/RHFTextInput';
import {useDispatch} from 'react-redux';
import {fetchFlights} from '../../apis/FetchFlights';
import {useNavigation} from '@react-navigation/native';
import useThrottling from '../../hooks/useThrottling';

import {
  StyledSafeAreaContainer,
  StyledTouchableWrapper,
  StyledSearchFlights,
  StyledSearchFlightButton,
} from './TravelRequestScreen.style';

const TravelRequestScreen = () => {
  const dispatch = useDispatch();
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();
  const {throttle} = useThrottling();

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
  const onSubmit = useMemo(
    () =>
      throttle(() => {
        dispatch(fetchFlights());
        navigation.navigate('FlightListing');
      }, 100),
    [dispatch, navigation, throttle],
  );

  return (
    <>
      <StyledSafeAreaContainer>
        <RHFTextInput
          iconName="aircraft-take-off"
          name="source"
          placeholder="Source"
          control={control}
          rules={{
            required: 'source is required',
          }}
        />

        <RHFTextInput
          iconName="aircraft-landing"
          name="destination"
          placeholder="Destination"
          control={control}
          rules={{
            required: 'destination is required',
          }}
        />

        <StyledTouchableWrapper onPress={showPicker}>
          <RHFTextInput
            iconName="calendar"
            name="Date"
            placeholder="Date"
            editable={false}
            control={control}
            customValue={date.toDateString()}
          />
        </StyledTouchableWrapper>
        {isPickerShow && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
            dateFormat="DD-MM-YYYY"
          />
        )}
        <StyledSearchFlightButton onPress={handleSubmit(onSubmit)}>
          <StyledSearchFlights> Search Flights</StyledSearchFlights>
        </StyledSearchFlightButton>
      </StyledSafeAreaContainer>
    </>
  );
};

export default TravelRequestScreen;
