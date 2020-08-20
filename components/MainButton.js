import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
    return(
        <TouchableOpacity onPress = {props.onPress}>
            <View style = {styles.button}>  
                <Text style = {styles.buttonText}></Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        fontFamily: 'montserrat'
    }

});

export default MainButton;