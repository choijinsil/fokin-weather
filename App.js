import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "795e2cf45f6951409fa92e319cc6715a";
export default class extends React.Component { 
    state = {
  isLoading: true
}; 
getWeather = async (latitude, longitude) => {
const {
    data: {
        main: {temp},
          weather
    }
    } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false, 
      condition: weather[0].main, 
      temp});
};
getLocation = async () => {
    try {
        await Location.requestPermissionsAsync();
        const {
            coords: {
                latitude,
                longitude
            }
        } = await Location.getCurrentPositionAsync();
        //Send to API and get weather!
        this.getWeather(latitude, longitude);
        this.setState({isLoading: false});
    } catch (error) {
        Alert.alert("can't find you.", "So sad");
    }
};

componentDidMount() {
    this.getLocation();
}
render() {
    const {isLoading, temp, condition} = this.state;

    return isLoading
        ? <Loading/>
        : <Weather temp={Math.round(temp)} condition={condition}/>;
}
}

