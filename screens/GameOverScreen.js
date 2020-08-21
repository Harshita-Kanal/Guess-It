import React from 'react';
import {View, StyleSheet, Text, Button, Image, ScrollView, Dimensions} from 'react-native';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';
const GameOverScreen = props => {
    return(
        <ScrollView>
        <View style = {styles.screen}>
            <Text style = {styles.title}>The Game is Over!</Text>
            <View style = {styles.imageContainer}>
                <Image style = {styles.image} source={require('../assets/success.png')} />
            </View>
            <View style = {styles.textContainer}>
                    <Text style={styles.text}>Your phone took<Text style={styles.highlight}> {props.roundsNumber}</Text> Rounds
                    to guess <Text style={styles.highlight}>{props.userNumber}</Text> correctly.</Text>
            </View>
            {/* <Text  style={styles.text}>The number of Rounds: {props.roundsNumber}</Text>
            <Text style={styles.text}>Number was: {props.userNumber}</Text> */}
            <MainButton onPress = {props.onRestart}>Start Over</MainButton>
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
            // height: 250,
            // width: 250,
            // borderRadius: 125,
            width: Dimensions.get('window').width * 0.7,
            height: Dimensions.get('window').width * 0.7,
            borderRadius: Dimensions.get('window').width * 0.7 / 2,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
            marginVertical: Dimensions.get('window').height / 30,
            // marginVertical: 20,
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
           // fontSize: 20,
            fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
            marginBottom: 10,
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
        marginTop: 20

    }
});

export default GameOverScreen;