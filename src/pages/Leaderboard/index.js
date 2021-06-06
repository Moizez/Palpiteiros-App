import React, { useState, useEffect } from 'react'
import { Dimensions, Text } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

import api_groups from '../../services/api_groups'
import api_qualifiers from '../../services/api_qualifiers'

import Header from '../../components/Header'
import GroupStage from './GroupStage'
import RoundOf16 from './RoundOf16'
import Quarterfinals from './Quarterfinals'
import Finals from './Finals'

const initialLayout = { width: Dimensions.get('window').width }

const Leaderboard = ({ route }) => {

    const { id, name, year } = route.params
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'first', title: 'Fase de Grupos' },
        { key: 'second', title: 'Oitavas  de Final' },
        { key: 'third', title: 'Quartas de Final' },
        { key: 'fourth', title: 'Semifinal e Final' }
    ])

    const [groups, setGroups] = useState([])
    const [roundOf16, setRoundOf16] = useState([])
    const [loading, setLoading] = useState(true)

    const loadGroups = async () => {
        const response = await api_groups.getGroupsByChampionshipId(id)
        setGroups(response.data)
        setLoading(false)
    }

    const loadRoundOf16 = async () => {
        const response = await api_qualifiers.getAllOctaves()
        setRoundOf16(response.data)
        setLoading(false)
    }

    useEffect(() => {
        loadGroups()
        loadRoundOf16()
    }, [])

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

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <GroupStage data={groups} loading={loading} />
            case 'second':
                return <RoundOf16 data={roundOf16} loading={loading} />
            case 'third':
                return <Quarterfinals />
            case 'fourth':
                return <Finals />
            default:
                return null;
        }
    }

    return (
        <>
            <Header
                title={name}
                label={year}
                hasImage
                hasIcon
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

export default Leaderboard
