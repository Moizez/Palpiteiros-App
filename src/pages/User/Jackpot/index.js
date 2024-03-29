import React, { useState } from 'react'
import { Dimensions, Text } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import styled from 'styled-components/native'

import MyJackpot from '../Jackpot/MyJackpot'
import OfficialJackpot from '../Jackpot/OfficialJackpot'
import OthersJackpot from '../Jackpot/OthersJackpot'

const initialLayout = { width: Dimensions.get('window').width }

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
				<Text style={{
					color,
					fontSize: 14,
					fontFamily: 'Quantico-Italic'
				}}>
					{route.title}
				</Text>
			)}
			indicatorStyle={{ backgroundColor: '#FFF' }}
			style={{ backgroundColor: '#2a628f' }}
		/>
	)

	const renderScene = SceneMap({
		first: MyJackpot,
		second: OfficialJackpot,
		third: OthersJackpot
	})

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
	)
}

const Header = styled.View`
flex: 0.15;
width: 100%;
background-color: #022c6f;
align-items: center;
justify-content: center;
`;

const Title = styled.Text`
font-size: 22px;
color: #FFF;
`;

const Label = styled.Text`
color: #FFF;
font-size: 15px;
`;

export default Jackpot