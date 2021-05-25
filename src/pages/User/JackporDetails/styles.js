import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
background-color: #022c6f;
`;

export const Header = styled.View`
flex: 0.2;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 15px;
`;

export const BackButton = styled.TouchableOpacity`
`;

export const HeaderTitle = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const Ranking = styled.View`
flex: 0.1;
width: 100%;
flex-direction: row;
align-items:center;
`;

export const RankingItem = styled.View`
align-items: center;
`;

export const FlatList = styled.FlatList`
flex: 1;
width: 100%;
margin-bottom: 10px;
`;

export const Title = styled.Text`
font-size: 24px;
color: #FFF
`;

export const Label = styled.Text`
font-size: 15px;
color: #FFF;
`;

export const Button = styled.TouchableOpacity`
margin-top: 20px;
width: 200px;
height: 35px;
background-color: #022c6f;
align-items: center;
justify-content: center;
`;
