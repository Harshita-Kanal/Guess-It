import React from 'react';
import {View, StyleSheet, Text, Button, Image, ScrollView} from 'react-native';
import Colors from '../constants/colors';
const GameOverScreen = props => {
    return(
        <ScrollView>
        <View style = {styles.screen}>
            <Text style = {styles.title}>The game is Over!</Text>
            <View style = {styles.imageContainer}>
                <Image style = {styles.image} source={require('../assets/success.png')} />
            </View>
            <Text  style={styles.text}>The number of Rounds: {props.roundsNumber}</Text>
            <Text style={styles.text}>Number was: {props.userNumber}</Text>
            <Button title = "Start Over" color = {Colors.accent} onPress = {props.onRestart} />
        </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },

        imageContainer:{
            height: 200,
            width: 200,
            borderRadius: 100,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
            marginVertical: 10,
            overflow: 'hidden'

        },

        image:{
            width: '100%',
            height: '100%'
        },

        text: {
            fontFamily: 'montserrat',
            color: Colors.primary,
            margin: 5

        },
    title: {
        fontFamily: 'montserrat',
        color: Colors.primary,
        margin: 5,
        fontSize: 20

    }
});

export default GameOverScreen;