import React from 'react'

import api from '../../../../services/api_championships'
import OfficialJackpotList from '../../../../components/OfficialJackpotList'
import EmptyList from '../../../../components/EmptyList'

import { Container, FlatList } from './styles'

const OthersJackpot = () => {

    return (
        <Container>
            <FlatList
                data={null}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => <OfficialJackpotList data={item} />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <EmptyList message='Nenhum bolão disponível!' />
                }
            />
        </Container>
    );
}

export default OthersJackpot