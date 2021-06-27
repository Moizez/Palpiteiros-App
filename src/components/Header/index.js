import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components/native'

import logo from '../../assets/images/logo_euro.png'

const Header = (props) => {

    const navigation = useNavigation()

    return (
        <Container>
            {props.hasIcon &&
                <Close onPress={() => navigation.goBack()}>
                    <Icon name='chevron-down' color='#FFF' size={35} />
                </Close>
            }

            <Info>
                <Title>{props.title}</Title>
                {props.label &&
                    <Label>{props.label}</Label>
                }
            </Info>

            {props.hasImage &&
                <ImageBox>
                    <Image
                        source={logo}
                        resizeMode='contain'
                    />
                </ImageBox>
            }

        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    min-height: 80px;
    flex-direction: row;
    background-color: #022c6f;
    padding: 20px;
`;

const Close = styled.TouchableOpacity`
    justify-content: center;
    position: absolute;
    top: 25px;
    left: 15px;
`;

const Info = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const ImageBox = styled.View`
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 25px;
    right: 15px;
`;


const Image = styled.Image`
    width: 50px;
    height: 50px;
`;

const Title = styled.Text`
    font-size: 22px;
    color: #FFF;
`;

const Label = styled.Text`
    color: #FFF;
    font-size: 12px;
`;

export default Header
