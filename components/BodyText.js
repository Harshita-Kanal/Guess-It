import React from 'react';
import {Text, StyleSheet} from 'react-native';

const BodyText = props => {
    return(
    <Text style = {styles.text}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'montserrat'
    }
})

export default BodyText;