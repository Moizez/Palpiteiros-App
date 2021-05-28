import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { DataTable } from 'react-native-paper'
import styled from 'styled-components/native'

import api from '../../services/api_championships'
import api_groups from '../../services/api_groups'
import Header from '../../components/Header'

import { Container, TableContainer, Title } from './styles'

const Leaderboard = ({ route }) => {

    const { id, name, year } = route.params
    const [championship, setChampionship] = useState([])
    const [groups, setGroups] = useState([])

    useEffect(() => {
        const loadGroups = async () => {
            const response = await api_groups.getAllGroups()
            setGroups(response.data)
        }
        loadGroups()
    }, [])

    return (
        <Container>
            <Header
                title={name}
                label={year}
                hasImage
            />

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>SELEÇÃO</DataTable.Title>
                    <DataTable.Title numeric>P</DataTable.Title>
                    <DataTable.Title numeric>J</DataTable.Title>
                    <DataTable.Title numeric>V</DataTable.Title>
                    <DataTable.Title numeric>E</DataTable.Title>
                    <DataTable.Title numeric>D</DataTable.Title>
                </DataTable.Header>
                {groups[0]?.punctuations?.map(i => (
                    <DataTable.Row key={i.id}>
                        <DataTable.Cell>{i.team.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{i.points}</DataTable.Cell>
                        <DataTable.Cell numeric>{i.points}</DataTable.Cell>
                        <DataTable.Cell numeric>{i.points}</DataTable.Cell>
                        <DataTable.Cell numeric>{i.points}</DataTable.Cell>
                        <DataTable.Cell numeric>{i.points}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </Container>
    )
}

export default Leaderboard
