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

export const Flag = styled.Image`
    width: 55px;
    height: 35px;
`;

export const Team = styled.View`
    align-items: center;
`;

export const TeamName = styled.Text`
    font-size: 12px;
    font-weight: bold;
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

export const HunchButton = styled.TouchableOpacity`
    height: 45px;
    width: 100%;
    background-color: #43aa8b;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    flex-direction: row;
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

export const HunchInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
`;

export const HunchScore = styled.View`
    width: 52px;
    height: 62px;
    border-width: 0.2px;
    border-radius: 3px;
    border-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const HunchScoreBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 30px;
    color: #FFF;
    text-align: center;
    font-family: ${props=>props.theme.fontQRegular};
`;

export const PenaltyBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TeamNamePn = styled.Text`
    font-size: 15px;
    color: #000;
`;

export const Divider = styled.View`
    width: 100%;
    height: 0.5px;
    background-color: #FFF;
    margin: 10px 0;
    opacity: 0.2;
`;










