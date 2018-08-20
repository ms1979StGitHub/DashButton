import EStyleSheet from 'react-native-extended-stylesheet';

const imageHeight = 40;
const imageWidth = 40;

export default EStyleSheet.create({



    container: {
        flex: 1,
        alignItems: 'right',
        margin: 5,
        justifyContent: 'right',
        backgroundColor: '$primaryBlue',        
    },

    propertiesImage: {
        width: imageWidth,
        height: imageHeight,
        
    },
   
});