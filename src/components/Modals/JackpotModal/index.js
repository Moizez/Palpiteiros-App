import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Button from '../../Paper/Button'

import {
    Container, Info, SubHeader, ImageBox, CloseButton, ModalHeader, Title, ModalInfo,
    Image, BoldText, Text, Description, Divider, ButtonBox
} from './styles'

const JackpotModal = (props) => {
    return (
        <>
            <Container>
                <ModalHeader>
                    <CloseButton onPress={props.closeModal}>
                        <Icon name='chevron-down' color='#FFF' size={35} />
                    </CloseButton>
                </ModalHeader>

                <ModalInfo>
                    <SubHeader>
                        <ImageBox style={{ elevation: 1 }}>
                            <Image
                                source={require('../../../assets/images/logo_euro.png')}
                                resizeMode='contain'
                            />
                        </ImageBox>
                        <Title>{props.title}</Title>
                    </SubHeader>

                    <Info>
                        <BoldText>Campeonato: <Text>{props.championship}</Text></BoldText>
                        <BoldText>Ano: <Text>{props.year}</Text></BoldText>
                        <BoldText>Início: <Text>sáb, 11/06</Text></BoldText>
                        <BoldText>Nº de participantes: <Text>{props.totalParticipants}</Text></BoldText>
                        <BoldText>ID da competição: <Text>{props.id}</Text></BoldText>

                        <Description>
                            <Title>Descrição</Title>

                            <Divider />

                            <Text style={{ textAlign: 'justify' }}>
                                A Eurocopa - Campeonato Europeu de Futebol é o principal campeonato de futebol
                                de seleções dos países da UEFA (União de Associações de Futebol Europeias -
                                em inglês: Union of European Football Associations). A Eurocopa é realizada
                                a cada quatro anos desde 1960, primeira edição da competição em 1960.
                                Originalmente a Eurocopa era chamada de Copa das Nações Europeias. Em 1968
                                o Campeonato Europeu de Futebol passou-se a chamar apenas Eurocopa.
                        </Text>
                        </Description>

                    </Info>

                </ModalInfo>

            </Container >

            <ButtonBox>
                <Button
                    onPress={props.confirmModal}
                    loading={null}
                >
                    Participar
                </Button>
            </ButtonBox>
        </>
    );
}

export default JackpotModal


