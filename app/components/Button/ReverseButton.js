import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';

const ReverseButton = ({text, onPress}) => (

    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
        <Image
        resizeMode="contain"
        style={styles.reverseImage}
        source={require('./images/reverseButton.png')}
      />
            <Text style={styles.text} >{text} </Text>
            </View>
        </TouchableOpacity>

);

ReverseButton.propTypes = {

    onPress: PropTypes.func,
    text: PropTypes.string,
    
};


export default ReverseButton;