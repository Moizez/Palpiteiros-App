import React, { useState } from 'react'
import styled from 'styled-components/native';

import JackpotList from '../../../../components/Lists/JackpotList'
import EmptyList from '../../../../components/Lists/EmptyList'
import Loading from '../../../../components/Loading'

const OthersJackpot = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleRefresh = async () => {
        setRefreshing(true)
        await loadJackpots()
        setRefreshing(false)
    }

    return (
        <Container>
            <FlatList
                data={null}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <JackpotList data={item} />}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={["gray", "blue"]}
                    />
                }
                ListEmptyComponent={
                    <EmptyList message='No momento não há nenhum bolão disponível!' />
                }
            />
            {loading && !refreshing && <Loading lottie={require('../../../../assets/lotties/soccer-field.json')}/>}
        </Container>
    );
}

const Container = styled.View`
flex:1;
align-items: center;
justify-content: center;
background-color: #fff;
padding: 5px 20px;
`;

const FlatList = styled.FlatList`
flex: 1;
width: 100%;
background-color: #FFF;
`;

const RefreshControl = styled.RefreshControl``;

export default OthersJackpot