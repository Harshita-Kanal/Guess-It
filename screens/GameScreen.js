import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert, ScrollView} from 'react-native';
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';
import {Ionicons} from '@expo/vector-icons';
import BodyText from '../components/BodyText';

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
};

const renderListItem = (value, numOfRound) => (
                                    <View key = {value} style = {styles.listItem}>
                                        <BodyText>#{numOfRound}</BodyText>
                                        <BodyText>{value}</BodyText>
                                   </View>); 


const GameScreen = props => {
    const initialGuess = generateRandomNumber(1, 100, props.userChoice);
        const [currentGuess, setCurrentGuess] = useState(initialGuess);
        const [rounds, setRounds] = useState(0);
        const [pastGuesses, setPastGuesses] = useState([initialGuess]);
        const currentLow = useRef(1);
        const currentHigh = useRef(100);
        
        const {userChoice, onGameOver} = props;
        useEffect( () => {
            if(currentGuess === props.userChoice) {
                props.onGameOver(pastGuesses.length);
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
                 currentLow.current = currentGuess + 1;
             }

            const nextNumber =  generateRandomNumber(
                 currentLow.current ,
                 currentHigh.current ,
                 currentGuess);
            setCurrentGuess(nextNumber);
            //setRounds(curRounds => curRounds + 1);
            setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
         };

        return(
            
            <View style = {styles.screen}>
                <Text style = {styles.title}>Opponent's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card style = {styles.buttonContainer}>
                    <MainButton onPress={() => nextGuessHandler('lower')}  ><Ionicons name = "md-remove" size = {24} color = "white" /></MainButton>
                    <MainButton onPress={() => nextGuessHandler('upper')}><Ionicons name="md-add" size={24} color="white" /></MainButton>
                   {/* <Button title="Lower" color={Colors.accent} onPress = {() => nextGuessHandler('lower')} />   
                    <Button title="Higher" color={Colors.primary} onPress={() => nextGuessHandler('upper')}  />  */}
                </Card>
                <View style = {styles.list}>
                    <ScrollView>
                        {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                    </ScrollView>
                </View>
              
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
            color: Colors.accent,
            fontFamily: 'montserrat'
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
        },
        listItem:{
            borderColor: '#ccc',
            borderWidth: 1,
            padding: 15,
            marginVertical: 10,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        list: {
            width: '80%',
            flex: 1
        }


});

export default GameScreen;