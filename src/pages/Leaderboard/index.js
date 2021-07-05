import React, { useState, useEffect } from 'react'
import { Dimensions, Text } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view'

import api_groups from '../../services/api_groups'
import api_qualifiers from '../../services/api_qualifiers'

import Header from '../../components/Header'
import GroupStage from './GroupStage'
import RoundOf16 from './RoundOf16'
import Quarterfinals from './Quarterfinals'
import Semifinals from './Semifinals'
import Finals from './Finals'
import Loading from '../../components/Loading'

const initialLayout = { width: Dimensions.get('window').width }

const Leaderboard = ({ route }) => {

    const { id, name, year, champion, viceChampion } = route.params
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 0, title: 'Grupos' },
        { key: 1, title: 'Oitavas' },
        { key: 2, title: 'Quartas' },
        { key: 3, title: 'Semi' },
        { key: 4, title: 'Final' },
    ])

    const [groups, setGroups] = useState([])
    const [roundOf16, setRoundOf16] = useState([])
    const [quarterfinals, setQuarterfinals] = useState([])
    const [semifinals, setSemifinals] = useState([])
    const [finals, setFinals] = useState([])
    const [loading, setLoading] = useState(true)

    const loadGroups = async () => {
        const response = await api_groups.getGroupsByChampionshipId(id)
        setGroups(response.data)
        setLoading(false)
    }

    const loadRoundOf16 = async () => {
        const response = await api_qualifiers.getAllOctaves(id)
        setRoundOf16(response.data)
        setLoading(false)
    }

    const loadQuarterfinals = async () => {
        const response = await api_qualifiers.getAllQuarterfinals(id)
        setQuarterfinals(response.data)
        setLoading(false)
    }

    const loadSemifinals = async () => {
        const response = await api_qualifiers.getAllSemis(id)
        setSemifinals(response.data)
        setLoading(false)
    }

    const loadFinals = async () => {
        const response = await api_qualifiers.getAllFinals(id)
        setFinals(response.data)
        setLoading(false)
    }

    useEffect(() => {
        loadGroups()
        loadRoundOf16()
        loadQuarterfinals()
        loadSemifinals()
        loadFinals()
    }, [])

    const renderTabBar = props => (
        <TabBar {...props}
            renderLabel={({ route, color }) => (
                <Text style={{ color, fontSize: 14 }}>
                    {route.title}
                </Text>
            )}
            indicatorStyle={{ backgroundColor: '#FFF' }}
            style={{ backgroundColor: '#2a628f' }}
        />
    )

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 0:
                return <GroupStage data={groups} />
            case 1:
                return <RoundOf16 data={roundOf16} />
            case 2:
                return <Quarterfinals data={quarterfinals} />
            case 3:
                return <Semifinals
                    dataSemi={semifinals}
                    dataFinals={finals}
                    champion={champion}
                    viceChampion={viceChampion}
                />
            case 4:
                return <Finals
                    dataSemi={semifinals}
                    dataFinals={finals}
                    champion={champion}
                    viceChampion={viceChampion}
                />
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
            {loading && <Loading lottie={require('../../assets/lotties/soccer-field.json')} />}
        </>
    )
}

export default Leaderboard
