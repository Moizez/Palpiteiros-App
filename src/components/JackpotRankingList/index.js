import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { DataTable } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

const JackpotRankingList = ({ data, index }) => {

    const navigation = useNavigation()

    return (
        <Container onPress={() => navigation.navigate('OtherProfiles', { data: data })} activeOpacity={0.8}>
            <DataTable>
                <DataTable.Row
                    style={{
                        backgroundColor: index < 1 ? '#ddd' : index === 1 ? '#eee' : null
                    }}
                >
                    <DataTable.Cell>{data?.position}</DataTable.Cell>
                    <DataTable.Cell style={{ flex: 3 }}>{data.user?.name}</DataTable.Cell>
                    <DataTable.Cell numeric>
                        <Icon
                            name={index === 0 ? 'trophy' : index === 1 ? 'trophy-award' : null}
                            size={20}
                            color={index === 0 ? '#43aa8b': index === 1 ? '#1d4e89' : null}
                        />
                    </DataTable.Cell>
                    <DataTable.Cell numeric>{data?.totalPoints}</DataTable.Cell>
                    <DataTable.Cell numeric>{data?.totalAccuracy}</DataTable.Cell>
                    <DataTable.Cell numeric>{data?.totalHits}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </Container>
    );
}

const Container = styled.TouchableOpacity``;

export default JackpotRankingList