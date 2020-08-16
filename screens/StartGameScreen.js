import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
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
                   />
                 <View style = {styles.buttonContainer}>
                    <View style = {styles.button}><Button color = {Colors.accent}  title="Reset" onPress={() => { }} /></View> 
                    <View style = {styles.button}><Button color = {Colors.primary}  title="Confirm" /></View>  
                 </View>
             </Card>
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
    }

 
});


export default StartGameScreen;



