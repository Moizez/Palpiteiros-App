import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, YellowBox } from 'react-native';

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes/index';

console.disableYellowBox = true

const App = () => {
	return (
		<NavigationContainer>
			<AuthProvider>
				<StatusBar backgroundColor="#022c6f" barStyle="light-content" />
				<Routes />
			</AuthProvider>
		</NavigationContainer>
	);
}

export default App