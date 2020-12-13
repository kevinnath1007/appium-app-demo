import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components';

function HomeScreen(props) {

    return (
        <View accessibilityLabel="ViewHomeScreen" testID="ViewHomeScreen" style={{flex: 1, justifyContent: 'center'}}>
            <Button accessibilityLabel="" testID="" onPress={() => {}} label="download bundle!" />
        </View>
    )
}

export default HomeScreen;
