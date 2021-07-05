import React, { useState } from 'react'
import { Dimensions, Text } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view'

import Header from '../../../../components/Header'
import PastGames from './PastGames'
import NextGames from './NextGames'

const initialLayout = { width: Dimensions.get('window').width }

const Hunchs = ({ route }) => {

	const { idChampionship, idJackpot } = route.params

	const [index, setIndex] = useState(1)
	const [routes] = useState([
		{ key: 'first', title: 'Encerrados' },
		{ key: 'second', title: 'Próximos' }
	])

	const renderTabBar = props => (
		<TabBar {...props}
			renderLabel={({ route, color }) => (
				<Text style={{
					color,
					fontSize: 16,
					fontFamily: 'Quantico-Italic'
				}}>
					{route.title}
				</Text>
			)}
			indicatorStyle={{
				backgroundColor: props?.navigationState?.index === 0 ? '#da1e37' : '#2dc653',
				borderTopLeftRadius: props?.navigationState?.index === 0 ? 0 : 5,
				borderTopRightRadius: props?.navigationState?.index === 0 ? 5 : 0,
				height: 4
			}}
			style={{ backgroundColor: '#2a628f' }}
		/>
	)

	const renderScene = ({ route }) => {
		switch (route.key) {
			case 'first':
				return <PastGames
					idChampionship={idChampionship}
					idJackpot={idJackpot}
				/>
			case 'second':
				return <NextGames
					idChampionship={idChampionship}
					idJackpot={idJackpot}
				/>
			default:
				return null;
		}
	}

	return (
		<>
			<Header
				hasIcon
				title='Lista de Jogos'
			/>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={initialLayout}
				renderTabBar={renderTabBar}
			/>
		</>
	)
}

export default Hunchs
