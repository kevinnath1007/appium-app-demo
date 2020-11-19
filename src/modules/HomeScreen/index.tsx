import React from 'react';
import { View, NativeModules } from 'react-native';
import { Button } from '../../components';

function HomeScreen(props) {
    const { navigation } = props;

    const navigate = () => {
        navigation.navigate('Calculation');
    }

    const download = () => {
        NativeModules.HotSwapBundle.downloadBundle()
    }

    return (
        <View accessibilityLabel="ViewHomeScreen" testID="ViewHomeScreen" style={{flex: 1, justifyContent: 'center'}}>
            <Button accessibilityLabel="" testID="" onPress={download} label="download bundle!" />
            <Button accessibilityLabel="homeButton" testID="homeButton" onPress={navigate} label="Kalkulasi"/>
        </View>
    )
}

export default HomeScreen;
