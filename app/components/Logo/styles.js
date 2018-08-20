import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const imageHeight = 120;
const imageWidth = 120;
const borderRadius = imageHeight / 2;
        

export default EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
        justifyContent: 'center',
        backgroundColor: '$primaryBlue',        
    },

    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: borderRadius,
        width: imageWidth,
        height: imageHeight,
    },

    textColor: {
        margin: 15,
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold',
        color : '$white',
    },


    button: {
        backgroundColor: '$primaryBlue',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
      },
     

});