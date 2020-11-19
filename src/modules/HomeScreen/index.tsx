import React from 'react';
import { View, NativeModules } from 'react-native';
import { Button } from '../../components';

function HomeScreen(props) {
    const { navigation } = props;

    const download = () => {
        NativeModules.HotSwapBundle.downloadBundle()
    }

    return (
        <View accessibilityLabel="ViewHomeScreen" testID="ViewHomeScreen" style={{flex: 1, justifyContent: 'center'}}>
            <Button accessibilityLabel="" testID="" onPress={download} label="download bundle!" />
        </View>
    )
}

export default HomeScreen;
