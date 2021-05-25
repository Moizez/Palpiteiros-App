import React from 'react';
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Container, Label } from './styles'

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

export default GameButton