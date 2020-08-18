import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card';
import Colors from '../constants/colors';
const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    }
    else {
        return rndNum;
    }
}


const GameScreen = props => {
        const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice));
        const [rounds, setRounds] = useState(0);
        const currentLow = useRef(1);
        const currentHigh = useRef(100);
        
        const {userChoice, onGameOver} = props;
        useEffect( () => {
            if(currentGuess === props.userChoice) {
                props.onGameOver(rounds);
            }
        }, [currentGuess, userChoice, onGameOver]);

         const nextGuessHandler = direction => {
             if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'upper' && currentGuess > props.userChoice))
             {
                 Alert.alert("Don\'t Lie!", "I know that this is wrong..", [{ text: 'Sorry!', style: 'cancel' }]);
                 return;
             }

             if(direction === 'lower'){
                currentHigh.current = currentGuess;
             }

             else{
                 currentLow.current = currentGuess;
             }

            const nextNumber =  generateRandomNumber(
                 currentLow.current ,
                 currentHigh.current ,
                 currentGuess);
            setCurrentGuess(nextNumber);
            setRounds(curRounds => curRounds + 1);
         };

        return(
            <View style = {styles.screen}>
                <Text style = {styles.title}>Opponent's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card style = {styles.buttonContainer}>
                   <Button title="Lower" color={Colors.accent} onPress = {() => nextGuessHandler('lower')} />   
                    <Button title="Higher" color={Colors.primary} onPress={() => nextGuessHandler('upper')}  /> 
                </Card>
            </View>
        )
};

const styles = StyleSheet.create({
        screen: {
            flex: 1,
            padding: 10, 
            alignItems: 'center'
        },
        title: {
            fontSize: 20,
            marginVertical: 10,
            color: Colors.accent
        },

        buttonContainer: {
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-around',
            width: 300,
            maxWidth: "80%"

        },

        buttonItem :{
            width: 100
        }


});

export default GameScreen;