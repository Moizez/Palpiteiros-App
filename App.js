import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { StatusBar } from 'react-native'

import AuthProvider from './src/contexts/auth'
import Routes from './src/routes/index'
import { globalStyles } from './src/helpers/globalStyles'

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
				<ThemeProvider theme={globalStyles}>
					<PaperProvider theme={theme}>
						<StatusBar backgroundColor="#022c6f" barStyle="light-content" />
						<Routes />
					</PaperProvider>
				</ThemeProvider>
			</AuthProvider>
		</NavigationContainer>
	);
}

export default App