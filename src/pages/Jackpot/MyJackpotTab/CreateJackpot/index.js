import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {
    Container, Header, Title, Label, CloseButton, BoxImage, ImageButton, Form, Status,
    Input, StatusButton, Select
} from './styles'

const CreateJackpot = ({navigation}) => {
    const [name, setName] = useState('')
    const [award, setAward] = useState('')

    return (
        <Container>
            <Header>
                <CloseButton onPress={() => navigation.goBack()}>
                    <Icon name='close' size={30} color='#FFF' />
                </CloseButton>
                <Title>CRIAR BOLÃO</Title>
            </Header>

            <BoxImage>
                <ImageButton>
                    <Icon name='trophy' size={50} color='#FFF' />
                    <Label>Capa</Label>
                </ImageButton>
            </BoxImage>

            <Form>
                <Input
                    placeholder='Escolha um nome para o seu bolão'
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <Input
                    placeholder='Qual o prêmio? (ex: uma pizza)'
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={award}
                    onChangeText={(text) => setAward(text)}
                />
            </Form>

            <Status>
                <StatusButton>
                    <Icon name='lock-open-variant' size={40} color='#FFF' />
                    <Label>Aberto</Label>
                </StatusButton>

                <Title style={{ marginHorizontal: 25 }}>ou</Title>

                <StatusButton>
                    <Icon name='lock' size={40} color='#FFF' />
                    <Label>Fechado</Label>
                </StatusButton>
            </Status>

            <Select onPress={() => navigation.navigate('SelectChampionship')}>
                <Title style={{ color: '#022c6f' }}>Selecionar Competição</Title>
            </Select>

        </Container>
    );
}

export default CreateJackpot