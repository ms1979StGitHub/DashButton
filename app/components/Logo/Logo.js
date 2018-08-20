import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import { Constants, Audio } from 'expo';

shareToWhatsAppWithContact = (text, phoneNumber) => {
  Linking.openURL(`whatsapp://send?text=${text}&phone=${phoneNumber}`);
}

const Logo = () => (

  <View style={styles.container}>

    <TouchableOpacity onPress={async () => {
      const source = require('./sounds/Chewie3.mp3');

      try {
        await Audio.setIsEnabledAsync(true);
        const sound = new Audio.Sound();
        await sound.loadAsync(source);
        await sound.playAsync();
        // Send What's app message
        //await Linking.openURL('whatsapp://send?text=Go to lunch&phone=+491709127887')
        
      } catch (error) {
        console.error(error);
      }
    }}>

      <Image
        resizeMode="contain"
        style={styles.containerImage}
        source={require('./images/chew.png')}
      />

    </TouchableOpacity>



    <Text style={styles.textColor}> Come on Chewy </Text>

  </View>

);

export default Logo; 