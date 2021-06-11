import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

const GameButton = ({ onPress, focused }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Container
                focused={focused}
                colors={
                    focused
                        ? ['#52b788', '#2d6a4f']
                        : ['#0077b6', '#022c6f']
                }
            >
                <Icon name='soccer-field' color={focused ? '#FFF' : '#92929C'} size={30} />
                <Label focused={focused}>Jogos</Label>
            </Container>
        </TouchableWithoutFeedback>
    );
}


const Container = styled(LinearGradient)`
width: 60px;
height: 60px;
border-radius: 30px;
border-width: 0.7px;
border-color: ${({ focused }) => focused ? '#FFF' : '#92929C'};
align-items: center;
justify-content: center;
`;

const Label = styled.Text`
font-size: 11px;
color: ${({ focused }) => focused ? '#FFF' : '#92929C'};
`;

export default GameButton