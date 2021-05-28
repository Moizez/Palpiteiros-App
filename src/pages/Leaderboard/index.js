import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { DataTable } from 'react-native-paper'
import styled from 'styled-components/native'

import api from '../../services/api'

import { Container, Header, TableContainer, Title } from './styles'

const Leaderboard = ({ route }) => {

    const { id } = route.params
    const [championship, setChampionship] = useState([])

    const res = championship?.groups?.map((i) => i.punctuations)
    const data = res.map((i)=>i.draw)
    console.log(data)

    useEffect(() => {
        const loadChampionship = async () => {
            const response = await api.getOfficialChampionshipsById(id)
            setChampionship(response.data)
        }
        loadChampionship()
    }, [])

    return (
        <Container>
            <Header>

            </Header>

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>POS</DataTable.Title>
                    <DataTable.Title numeric>P</DataTable.Title>
                    <DataTable.Title numeric>J</DataTable.Title>
                    <DataTable.Title numeric>V</DataTable.Title>
                    <DataTable.Title numeric>E</DataTable.Title>
                    <DataTable.Title numeric>D</DataTable.Title>
                    <DataTable.Title numeric>GP</DataTable.Title>
                    <DataTable.Title numeric>GS</DataTable.Title>
                    <DataTable.Title numeric>SG</DataTable.Title>
                    <DataTable.Title numeric>%</DataTable.Title>
                </DataTable.Header>
                {res?.map((i) => {
                    <DataTable.Row key={i.id}>
                        <DataTable.Cell>{i.id}</DataTable.Cell>
                        <DataTable.Cell numeric>159</DataTable.Cell>
                        <DataTable.Cell numeric>6.0</DataTable.Cell>
                    </DataTable.Row>
                })}
            </DataTable>
        </Container>
    )
}

export default Leaderboard
