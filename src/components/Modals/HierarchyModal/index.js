import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { classes } from '../../../helpers/data'

const HierarchyModal = ({ bgColor, closeModal }) => {

    return (
        <Container bgColor={bgColor}>
            <CloseContainer onPress={closeModal} activeOpacity={1} />

            <ModalBox>
                <Header>
                    <Title>Classes de Palpiteiros</Title>
                    <CloseButton onPress={closeModal}>
                        <Icon name='chevron-down' size={35} color='#022c6f' />
                    </CloseButton>
                </Header>

                <Divider />
                {classes?.map(i =>
                    <ModalInfo key={i.id}>
                        <Icon name={i.iconName} size={15} color={i.iconColor} />
                        <Text style={{ fontWeight: 'bold' }}>{i.info}: </Text>
                        <Text style={{ fontStyle: 'italic' }}>{i.title}</Text>
                    </ModalInfo>
                )}

            </ModalBox>

            <CloseContainer onPress={closeModal} activeOpacity={1} />
        </Container>
    )
}

const CloseContainer = styled.TouchableOpacity`
    flex: 1;
`;

const Container = styled.View(({ bgColor }) => ({
    flex: 1,
    backgroundColor: bgColor ? 'rgba(0,0,0,0.5)' : null,
    padding: 30
}));

const ModalBox = styled.View`
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
`;

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const CloseButton = styled.TouchableOpacity``;

const ModalInfo = styled.View`
    flex-direction: row;
    padding: 10px;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #022c6f;
`;

const Text = styled.Text`
    text-align: center;
    margin-left: 5px;
`;

export const Divider = styled.View`
    width: 100%;
    height: 0.5px;
    background-color: #000;
    margin: 3px 0;
    opacity: 0.2;
`;


export default HierarchyModal
