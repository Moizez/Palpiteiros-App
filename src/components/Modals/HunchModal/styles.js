import styled from 'styled-components/native';

export const CloseContainer = styled.TouchableOpacity`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    justify-content: flex-end;
`;

export const ModalBox = styled.View`
    background-color: #022c6f;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 10px 20px;
`;

export const CloseButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

export const ModalHeader = styled.View`
    height: 40px;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #FFF;
    margin-left: 15px;
`;

export const HunchInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
`;

export const HunchScore = styled.View`
    width: 50px;
    height: 60px;
    border-width: 1px;
    border-color: #FFF;
    align-items: center;
    justify-content: center;
`;

export const HunchScoreBox = styled.View`
    flex-direction: row;
`;

export const Team = styled.View`
    align-items: center;
`;

export const TeamName = styled.Text`
    font-size: 12px;
    color: #FFF;
`;

export const Label = styled.Text`
font-size: 12px;
color: #FFF;
margin-left: 3px;
`;

export const Text = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
`;

export const HunchText = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: #FFF;
`;

export const HunchButton = styled.TouchableOpacity`
    height: 45px;
    width: 100%;
    background-color: #43aa8b;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
`;

export const ErrorBox = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ErrorText = styled.Text`
    font-size: 11px;
    color: #c1121f;
    margin: 0 5px;
`;

export const Input = styled.TextInput`
    font-size: 30px;
    font-weight: bold;
    color: #FFF;
    align-items: center;
    justify-content: center;
`;








