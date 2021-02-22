import React, { useState } from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import MyJackpotTab from '../Jackpot/MyJackpotTab'
import OfficialJackpotTab from '../Jackpot/OfficialJackpotTab'
import ListJackpotTab from '../Jackpot/ListJackpotTab'

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
		first: MyJackpotTab,
		second: OfficialJackpotTab,
		third: ListJackpotTab
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