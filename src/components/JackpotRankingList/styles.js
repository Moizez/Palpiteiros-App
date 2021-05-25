import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
align-items: center;
`;

export const Card = styled.TouchableOpacity`
flex-direction: row;
justify-content: space-between;
height: 80px;
width: 100%;
align-items: center;
border-radius: 3px;
background: rgba(0,0,0,0.20);
margin: 4px;
`;

export const CardItem = styled.View`
align-items: center;
`;

export const Label = styled.Text`
font-size: 15px;
color: #FFF;
`;

