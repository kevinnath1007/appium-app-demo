/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {HomeScreen, Calculation} from './src/modules';
import FloatingButton from './src/components/FloatingButton';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Modal} from './src/components';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const onPress = () => {
        setModalVisible(true);
    };

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Calculation" component={Calculation} />
        </Stack.Navigator>
        <FloatingButton visible={true} onPress={onPress} />
        <Modal
            visible={modalVisible}
            url="https://dl.dropboxusercontent.com/s/aqi4i84y9rub228/index.android.bundle"
            onRequestClose={() => setModalVisible(false)}
        />
    </NavigationContainer>
  );
};

export default App;
