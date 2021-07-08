import React from 'react'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'

const Loading = ({ lottie, bgColor }) => {

    return (
        <Container bgColor={bgColor}>
            <Load>
                <LottieView
                    source={lottie}
                    autoPlay loop
                />
            </Load>
        </Container>
    );
}

export default Loading

const Container = styled.View`
    background-color: ${props => props.bgColor ? props.bgColor : 'rgba(0, 0, 0, 0.7)'};
    position: absolute;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

const Load = styled.View`
    width: 200px;
    height: 100px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-bottom: 30px;
`;



