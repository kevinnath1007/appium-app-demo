import React from 'react';
import { Button } from 'react-native-paper';
import { propsTypes } from './types';

function CustomButton(props: propsTypes): JSX.Element {
    const { testID, label, onPress, flex, center, accessibilityLabel, style } = props;
    return (
        <Button
            accessible={true}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="button"
            testID={testID}
            mode="contained"
            onPress={onPress}
            style={[
                flex ? { flex: 1 } : {},
                center ? { alignSelf: 'center' } : {},
                { marginHorizontal: 32 },
                style
            ]}>
                {label}
        </Button>
    );
}

export default CustomButton;
