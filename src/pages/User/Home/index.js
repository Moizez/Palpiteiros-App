import React, { useState } from 'react'
import { Dimensions, Text } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

import { games } from '../../../helpers/data'

import Header from '../../../components/Header'
import PastGames from './PastGames'
import GamesToday from './GamesToday'
import FutureGames from './FutureGames'

const initialLayout = { width: Dimensions.get('window').width }

const Home = () => {

	const [index, setIndex] = useState(1)
	const [routes] = useState([
		{ key: 'first', title: 'Encerrados' },
		{ key: 'second', title: 'Hoje' },
		{ key: 'third', title: 'Futuros' }
	])

	const renderTabBar = props => (
		<TabBar {...props}
			renderLabel={({ route, color }) => (
				<Text style={{ color, fontSize: 15 }}>
					{route.title}
				</Text>
			)}
			indicatorStyle={{ backgroundColor: '#FFF' }}
			style={{ backgroundColor: '#022c6f' }}
		/>
	)

	const renderScene = SceneMap({
		first: () => <PastGames />,
		second: () => <GamesToday data={games} />,
		third: () => <FutureGames />
	})

	return (
		<>
			<Header
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

export default Home
