import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Color from '../constants/colors'

const BodyText = props => {
    return(
    <Text style = {styles.text}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'montserrat',
        color: Color.primary
    }
})

export default BodyText;