import React from 'react'
import styled from 'styled-components/native'

const UserJackpot = () => {
    return (
        <Container showsVerticalScrollIndicator={false}>
            <Text>BOLÃO DO USUÁRIO</Text>
        </Container>
    )
}

const Container = styled.ScrollView``;

const Text = styled.Text``;

export default UserJackpot
