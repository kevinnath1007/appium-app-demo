import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    textInput: {
        flex: 1,
        paddingLeft: 0,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        paddingVertical: 2,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '100%'
    },
    button: {
        width: "100%"
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        paddingBottom: 30,
        alignItems: "center",
        bottom: -15,
        width: Math.round(Dimensions.get('window').width),
        position: 'absolute',
        zIndex: 10
    },
    backgroundOpacity: {
        flex: 4,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.2)',
    }
})
