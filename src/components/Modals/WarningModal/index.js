import React from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native'

const WarningModal = ({ closeModal, message, lottie, bgColor }) => {

    let fail = require('../../../assets/lotties/fail.json')

    setTimeout(() => {
        closeModal()
    }, 2000);

    return (
        <Container bgColor={bgColor}>
            <CloseContainer onPress={closeModal} activeOpacity={1} />
            <ModalBox>
                <ModalInfo>
                    <LottieBox>
                        <LottieView
                            source={lottie ? lottie : fail}
                            autoPlay loop
                        />
                    </LottieBox>
                    <Text>{message}</Text>
                </ModalInfo>
            </ModalBox>

            <CloseContainer onPress={closeModal} activeOpacity={1} />
        </Container>
    );
}

export default WarningModal

const CloseContainer = styled.TouchableOpacity`
    flex: 1;
`;

const Container = styled.View(({ bgColor }) => ({
    flex: 1,
    backgroundColor: bgColor ? 'rgba(0,0,0,0.5)' : null
}));

const ModalBox = styled.View`
    align-items: center;
    justify-content: center;
`;

const ModalInfo = styled.View`
    width: 200px;
    height: 100px;
    background-color: #292b2c;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-bottom: 30px;
`;

const LottieBox = styled.View`
    width: 35px;
    height: 35px;
    margin-bottom: 10px;
`;

const Text = styled.Text`
    color: #FFF;
    text-align: center;
`;

const OkButton = styled.View`

`;


