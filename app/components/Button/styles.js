import EStyleSheet from 'react-native-extended-stylesheet';

const imageHeight = 40;
const imageWidth = 40;
const borderRadius = imageHeight / 2;

export default EStyleSheet.create({
    
    container:{
        alignItems: 'center',

    },
    
    wrapper : {
        flexDirection: 'row',
        alignItems: 'center',
    },

    text : {
        color : '$white',
        fontSize: 14,
        fontWeight: '300',
        marginLeft: 15,
        paddingVertical: 20,
    },
    
    reverseImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageHeight,
    },

    
});