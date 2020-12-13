import React from 'react';
import {
    Modal as NativeModal,
    View,
    Text,
    TextInput,
    NativeModules,
    TouchableOpacity,
} from 'react-native';
import Button from '../Button';
import styles from './styles';

function Modal(props) {
    const {
        visible,
        url,
        label,
        onRequestClose,
        containerStyle,
        textStyle,
        buttonStyle
    } = props;

    const [bundleId, setBundleId] = React.useState('');

    const onChange = (text) => {
        setBundleId(text)
    };

    const onPress = () => {
        NativeModules.HotSwapBundle.downloadBundle(url);
    };

    return (
        <>
            <NativeModal
                animationType="fade"
                transparent={true}
                visible={visible}
                style={styles.container}
                onRequestClose={onRequestClose}
            >
                <TouchableOpacity
                    style={styles.backgroundOpacity}
                    onPress={onRequestClose}
                    activeOpacity={1}
                />
                    <View style={[
                        styles.container,
                        containerStyle
                    ]}>
                        <Text style={textStyle}>
                            {label || "Set your bundle Id"}
                        </Text>
                        <TextInput
                            value={bundleId}
                            onChange={onChange}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                textStyle
                            ]}
                        />
                        <Button
                            style={[
                                styles.button,
                                buttonStyle
                            ]}
                            testID="ModalBundle"
                            onPress={onPress}
                            label="SWAP"
                            accessibilityLabel="SwappableButton"
                        />
                    </View>
            </NativeModal>
        </>
    )
}

export default Modal;
