import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

const Header = () => {


    return (

        <View style={styles.container}>

            <TouchableOpacity>

                <Image
                    resizeMode="contain"
                    style={styles.propertiesImage}
                    source={require('./images/properties.png')}
                />

            </TouchableOpacity>


        </View>



    );


};

Header.propTypes = {
};

export default Header;