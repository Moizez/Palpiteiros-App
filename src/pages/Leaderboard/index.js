import React, { useState, useEffect } from 'react'
import { Dimensions, Text } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

import api from '../../services/api_groups'

import Header from '../../components/Header'
import GroupStage from './GroupStage'
import Qualifiers from './Qualifiers'
import Finals from './Finals'

const initialLayout = { width: Dimensions.get('window').width }

const Leaderboard = ({ route }) => {

    const { id, name, year } = route.params
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'first', title: 'Grupos' },
        { key: 'second', title: 'Eliminatórias' },
        { key: 'third', title: 'Finais' }
    ])

    const [groups, setGroups] = useState([])
    const [loading, setLoading] = useState(true)

    const loadGroups = async () => {
        const response = await api.getGroupsByChampionshipId(id)
        setGroups(response.data)
        setLoading(false)
    }

    useEffect(() => {
        loadGroups()
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

    const renderScene = SceneMap({
        first: () => <GroupStage data={groups} loading={loading} />,
        second: () => <Qualifiers />,
        third: () => <Finals />
    })

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
