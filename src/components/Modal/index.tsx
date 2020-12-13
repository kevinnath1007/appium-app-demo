import React from 'react';
import {
    Modal as NativeModal,
    View,
    Text,
    TextInput,
    NativeModules,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Button from '../Button';
import styles from './styles';

function Modal(props) {
    const {
        visible,
        styleTextInput,
        url,
        onRequestClose
    } = props;

    const [bundleId, setBundleId] = React.useState('');

    const onChange = (text) => {
        setBundleId(text)
    };

    const onPress = () => {
        console.log(bundleId);
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
                    style={{
                        flex: 4,
                        justifyContent: "flex-end",
                        backgroundColor: 'rgba(0,0,0,0.2)',
                    }}
                    onPress={onRequestClose}
                    activeOpacity={1}
                />
                    <View style={{
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
                    }}
                    >
                        <Text>
                            Set your bundle Id
                        </Text>
                        <TextInput
                            value={bundleId}
                            onChange={onChange}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                styleTextInput
                            ]}
                        />
                        <Button
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
