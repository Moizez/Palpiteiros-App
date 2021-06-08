import React from 'react'
import { DataTable } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

const JackpotRankingList = ({ data }) => {

    const navigation = useNavigation()

    return (
        <Container onPress={() => navigation.navigate('Profile', { data: data })} activeOpacity={0.8}>
            <DataTable>
                <DataTable.Row>
                    <DataTable.Cell>{data?.position}</DataTable.Cell>
                    <DataTable.Cell>{data.user?.name}</DataTable.Cell>
                    <DataTable.Cell numeric>{data?.totalPoints}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </Container>
    );
}

const Container = styled.TouchableOpacity``;

export default JackpotRankingList