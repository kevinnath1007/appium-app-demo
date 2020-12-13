import { StyleProp, ViewStyle } from 'react-native';

export interface propsTypes {
    testID: string;
    onPress(): void;
    label: string;
    accessibilityLabel: string;
    style?: StyleProp<ViewStyle>;
    flex?: boolean;
    center?: boolean;
};
