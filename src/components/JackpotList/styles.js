import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Card = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    background-color: #ddd;
    padding: 10px;
    margin: 10px 0;
`;

export const Image = styled.Image`
    width: 80px;
    height: 80px;
`;

export const CardHeader = styled.View`

`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #000;
`;

export const Label = styled.Text`
    font-size: 15px;
`;

export const Modal = styled.Modal`
`;



