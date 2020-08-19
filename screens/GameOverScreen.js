import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const GameOverScreen = props => {
    return(
        <View style = {styles.screen}>
            <Text>The game is Over!</Text>
            <Text>The number of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title = "Start Over" onPress = {props.onRestart} />
        </View>
    );
};


const styles = StyleSheet.create({
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
});

export default GameOverScreen;