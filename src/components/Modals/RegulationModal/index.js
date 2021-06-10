import React from 'react'
import styled from 'styled-components/native'

import Header from '../../Header'
import Button from '../../Paper/Button'

const RegulationModal = ({ closeModal, message, title }) => {

    return (
        <>
            <Container>

                <Header
                    title={title}
                />

                <ModalInfo>
                    <Text>{message}</Text>
                </ModalInfo>


            </Container>
            <ButtonBox>
                <Button
                    onPress={closeModal}
                >
                    Fechar
            </Button>
            </ButtonBox>
        </>
    );
}

export default RegulationModal

const Container = styled.ScrollView(({ bgColor }) => ({
    flex: 1,
    backgroundColor: bgColor ? 'rgba(0,0,0,0.5)' : null
}));


const ModalInfo = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
`;

const ButtonBox = styled.View`
    align-items: center;
    justify-content: center;
    padding: 0 10px;
`;

const Text = styled.Text`
    color: #000;
    text-align: justify;
`;



