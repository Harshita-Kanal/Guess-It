import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Alert, Button, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView, Dimensions} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4); 
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

  
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);

    }

    useEffect(() => {
            const updateLayout = () => {
                setButtonWidth(Dimensions.get('window').width / 4);
            };

            Dimensions.addEventListener('change', updateLayout);

            return () => {
                  Dimensions.removeEventListener('change', updateLayout);                    
            };

        });

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number Has to be between 0 and 1',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            )
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
    confirmedOutput =
     <View >
         <Card style = {styles.summaryContainer}>
            <Text style = {styles.textItem}>You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={() => props.onStartGame(selectedNumber)}>
                Start Game
            </MainButton>
         </Card>  
     </View>
    }

    return(
//   <TouchableWithoutFeedback onPress = {() => {
//       Keyboard.dismiss();
//   }}> 
 <ScrollView>
     <KeyboardAvoidingView 
     behavior= "position"
     keyboardVerticalOffset = {30}
    >
        <View style = {styles.screen}>
            <Text style={styles.headTitle}>Start a New Game!</Text>
             <Card style = {styles.inputContainer}>
                 <BodyText>Select a Number</BodyText>
                 <Input style = {styles.input}
                   blurOnSubmit autoCapitalize = 'none'
                   autoCorrect = {false} 
                   keyboardType = "number-pad"
                   maxLength = {2}
                   onChangeText = {numberInputHandler}
                   value = {enteredValue}

                   />
                 <View style = {styles.buttonContainer}>
                    <View style = {{width: buttonWidth}}><Button color = {Colors.accent}  title="Reset" onPress={resetInputHandler} /></View> 
                    <View style = {{width: buttonWidth}}><Button color = {Colors.primary}  title="Confirm" onPress = {confirmInputHandler} /></View>  
                 </View>
             </Card>
            
             {confirmedOutput}
        </View>
            </KeyboardAvoidingView>
</ScrollView>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding:10,
        alignItems: 'center'
    },

    title:{
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'montserrat'
    },
    headTitle:{
        fontSize: 32,
        marginVertical: 10,
        fontFamily: 'montserrat-bold',
        color: Colors.accent
    },
  
    inputContainer:{
        width: '80%',
        minWidth: '80%',
        maxWidth: 300,
        alignItems: 'center',
    },

    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
       // paddingHorizontal: 25,
    },

    button:{
        width: 100
    },

    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textItem: {
        color: Colors.accent,
        fontSize: 20,
        fontFamily: 'montserrat'

    }

 
});


export default StartGameScreen;



