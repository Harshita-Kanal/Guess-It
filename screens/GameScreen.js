import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useState } from 'react';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.random() * (max - min) + min;
    if(rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    }
    else {
        return rndNum;
    }
}


const GameScreen = props => {
        const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice));

};

const styles = StyleSheet.create({

});

export default GameScreen;