import React, { useState } from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import MyJackpot from '../Jackpot/MyJackpot'
import OfficialJackpot from '../Jackpot/OfficialJackpot'
import OthersJackpot from '../Jackpot/OthersJackpot'

import { Header, Title, Label } from './styles'

const initialLayout = { width: Dimensions.get('window').width };

const Jackpot = () => {

	const [index, setIndex] = useState(0)
	const [routes] = useState([
		{ key: 'first', title: 'Meus Bolões' },
		{ key: 'second', title: 'Bolões Oficiais' },
		{ key: 'third', title: 'Outros Bolões' }
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
	);

	const renderScene = SceneMap({
		first: MyJackpot,
		second: OfficialJackpot,
		third: OthersJackpot
	});

	return (
		<>
			<Header>
				<Title>Seja um campeão!</Title>
				<Label style={{ fontSize: 13 }}>Crie ou participe de outros bolões</Label>
			</Header>

			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={initialLayout}
				renderTabBar={renderTabBar}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
	},
});

export default Jackpot