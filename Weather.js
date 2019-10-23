import React from "react";
import {View,Text,StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { white } from "ansi-colors";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
        
    },
    Thunderstorm: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"]
    },
    Drizzle: {
       iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"]
    },
    Rain: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"]
    },
    Snow: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"]
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE","#66A6FF"]
    },
    Clear: {
       iconName: "weather-sunny",
        gradient: ["#FF7300","#FEF253"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC","#304352"]
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"]
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"]
    }

};

export default function Weather({temp,condition}) {
    return (

        <LinearGradient
            colors={weatherOptions["Clouds"].gradient}
            style={styles.container}> 
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>

                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}  
                    color="white"/>
                <Text style={styles.temp}>{temp}도</Text>
            </View>
            <View style={styles.halfContainer}/>
        </LinearGradient>

    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes
        .oneOf([
            "Thunderstorm",
            "Drizzle",
            "Rain",
            "Snow",
            "Atmosphere",
            "Clear",
            "Clouds",
            "Haze",
            "Mist",
            "Dust"
        ])
        .isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize:42,
        color:"white"
    },
    halfContainer: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }
});