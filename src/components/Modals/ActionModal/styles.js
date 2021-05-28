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

export const ModalInfo = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 8px;
`;

export const NoButton = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    background-color: #c1121f;
    height: 45px;
    padding: 5px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const YesButton = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    background-color: #2a9d8f;
    height: 45px;
    padding: 5px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 18px;
`;

