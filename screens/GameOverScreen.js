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
            <View style = {styles.textContainer}>
                    <Text style={styles.text}>Your phone took <View style = {styles.highlight}>{props.roundsNumber}</View> Rounds
                    to guess <View style = {styles.highlight}>{props.userNumber}</View> correctly</Text>
            </View>
            {/* <Text  style={styles.text}>The number of Rounds: {props.roundsNumber}</Text>
            <Text style={styles.text}>Number was: {props.userNumber}</Text> */}
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
            height: 250,
            width: 250,
            borderRadius: 125,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
            marginVertical: 20,
            overflow: 'hidden'

        },

        textContainer :{
            marginHorizontal: 30,       
        },

        image:{
            width: '100%',
            height: '100%'
        },

        text: {
            fontFamily: 'montserrat',
            color: Colors.primary,
            margin: 5,
            fontSize: 20,
            marginBottom: 20,
            textAlign: 'center'

        },

        highlight: {
            color: Colors.accent,
            fontFamily: 'montserrat-bold'
        },
    title: {
        fontFamily: 'montserrat',
        color: Colors.accent,
        marginBottom: 10,
        fontSize: 25,
        marginTop: 60

    }
});

export default GameOverScreen;