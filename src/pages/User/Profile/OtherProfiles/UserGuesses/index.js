import React from 'react'
import styled from 'styled-components/native'


const UserGuesses = ({ data }) => {

    return (
        <Container>
            {data?.hunches?.map(i =>
                <Box key={i.id}>
                    <Text>{i.resultHunch.golsHome}</Text>
                    <Text>X</Text>
                    <Text>{i.resultHunch.golsVisiting}</Text>
                </Box>
            )}
        </Container>
    )
}

const Container = styled.View``;

const Box = styled.View``;

const Text = styled.Text``;


export default UserGuesses
