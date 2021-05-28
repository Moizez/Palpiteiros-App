import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components/native'

import logo from '../../assets/images/logo_euro.png'

const Header = (props) => {
    return (
        <Container>
            <Close>
                <Icon name='chevron-down' color='#FFF' size={25} />
            </Close>

            <Info>
                <Title>{props.title}</Title>
                <Label>{props.label}</Label>
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
min-height: 100px;
flex-direction: row;
background-color: #022c6f;
padding: 20px;
`;

const Close = styled.TouchableOpacity`
    justify-content: center;
`;

const Info = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const ImageBox = styled.View`
    align-items: center;
    justify-content: center;
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
font-size: 15px;
`;

export default Header
