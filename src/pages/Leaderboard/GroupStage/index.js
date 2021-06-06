import React from 'react'
import { Image, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import {TitleBox, Title, CellCustomized, Container} from './style'
import Loading from '../../../components/Loading'
import { changeFlags } from '../../../helpers/data'

const GroupStage = ({ data, loading }) => {

    const renderCell = (index, value)=>{
        if (index < 2){
            return (
                <CellCustomized>
                    {value}
                </CellCustomized>
            )
        } else if (index === 2){
            return (
                <CellCustomized>
                    {value}
                </CellCustomized>
            )
        }
        return value;
    }

    return (
        <>
            <Container showsVerticalScrollIndicator={false}>
                {data?.map(group =>
                    <DataTable key={group.id}>
                        <TitleBox>
                            <Title>Grupo {group.name}</Title>
                        </TitleBox>
                        <DataTable.Header>
                            <DataTable.Title style={{ flex: 0.5 }}></DataTable.Title>
                            <DataTable.Title style={{ flex: 2.5 }} >SELEÇÕES</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>P</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>J</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>V</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>E</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>D</DataTable.Title>
                        </DataTable.Header>
                        {group?.punctuations?.map((punctuation, index) => (
                            <DataTable.Row key={punctuation.id} style={{
                                backgroundColor: index < 2 ? '#022c6f' : index === 2 ? '#4c82bf' : null}}>
                                <DataTable.Cell style={{ flex: 0.5}}>
                                    {renderCell(index, punctuation.position === 0 ? 1 : punctuation.position)}
                                </DataTable.Cell>
                                <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        style={{ height: 40, width: 30 }}
                                        source={changeFlags(punctuation.team.initials)}
                                        resizeMode='contain'
                                    />
                                </View>
                                <DataTable.Cell style={{ flex: 2, marginLeft: 5 }}>{renderCell(index, punctuation.team.name)}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{renderCell(index, punctuation.points)}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{renderCell(index, punctuation.matchs)}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{renderCell(index, punctuation.victory)}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{renderCell(index, punctuation.draw)}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{renderCell(index, punctuation.defeat)}</DataTable.Cell>
                            </DataTable.Row>
                        ))}
                    </DataTable>
                )}
            </Container>
            {loading && <Loading />}
        </>
    )
}
export default GroupStage
