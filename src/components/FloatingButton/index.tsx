import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

function FloatingButton(props) {
    const {
        containerStyle,
        visible,
        onPress,
        style
    } = props;

    if (visible) {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.touchable,
                    containerStyle
                ]}
            >
                <View style={style}>
                    <Text>dev</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return null;
}

export default FloatingButton;
