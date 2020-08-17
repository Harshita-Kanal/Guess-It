import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

  
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);

    }

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
             <Button color = {Colors.accent} title = "Start Game!" />
         </Card>  
     </View>
    }

    return(
    //   <TouchableWithoutFeedback onPress = {() => {
    //       Keyboard.dismiss();
    //   }}>  
        <View style = {styles.screen}>
            <Text style={styles.title}>Start A new Game</Text>
             <Card style = {styles.inputContainer}>
                 <Text style = {styles.title}>Select a Number</Text>
                 <Input style = {styles.input}
                   blurOnSubmit autoCapitalize = 'none'
                   autoCorrect = {false} 
                   keyboardType = "number-pad"
                   maxLength = {2}
                   onChangeText = {numberInputHandler}
                   value = {enteredValue}

                   />
                 <View style = {styles.buttonContainer}>
                    <View style = {styles.button}><Button color = {Colors.accent}  title="Reset" onPress={resetInputHandler} /></View> 
                    <View style = {styles.button}><Button color = {Colors.primary}  title="Confirm" onPress = {confirmInputHandler} /></View>  
                 </View>
             </Card>
             <br />
             {confirmedOutput}
        </View>
 //   </TouchableWithoutFeedback>  


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
        marginVertical: 10
    },

    inputContainer:{
        width: 300,
        maxWidth: '80%',
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
        fontSize: 20

    }

 
});


export default StartGameScreen;



