import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { StatusBar } from 'react-native'

import AuthProvider from './src/contexts/auth'
import Routes from './src/routes/index'

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#022c6f',
	},
}

const App = () => {
	return (
		<NavigationContainer>
			<AuthProvider>
				<PaperProvider theme={theme}>
					<StatusBar backgroundColor="#022c6f" barStyle="light-content" />
					<Routes />
				</PaperProvider>
			</AuthProvider>
		</NavigationContainer>
	);
}

export default App