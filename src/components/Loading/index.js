import React from 'react'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'

const Loading = ({lottie}) => {

    return (
        <Container>
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
    background-color: rgba(0,0,0,0.5);
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



