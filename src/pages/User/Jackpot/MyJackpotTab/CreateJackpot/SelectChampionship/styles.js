import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
align-items: center;
justify-content: center;
background-color: #022c6f;
padding-bottom: 25px;
`;

export const Header = styled.View`
flex: 0.1;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: flex-start;
padding: 15px;
`;

export const BackButton = styled.TouchableOpacity`
margin-right: 20px;
`;

export const Title = styled.Text`
font-size: 20px;
color: #FFF;
`;

export const BoxIcon = styled.View`
background: rgba(0,0,0,0.20);
height: 48px;
width: 45px;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
margin-bottom: 15px;
align-items: center;
justify-content: center;
`;

export const SearchBox = styled.View`
flex-direction: row;
align-items: center;
`;

export const FlatList = styled.FlatList`
flex: 1;
width: 100%;
background-color: #022c6f;
`;

export const SearchInput = styled.TextInput.attrs({
    placeholderTextColor: '#909590'
})`
background: rgba(0,0,0,0.20);
width: 78%;
height: 48px;
font-size: 17px;
color: #022c6f;
margin-bottom: 15px;
padding: 10px;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
`;

export const ConfirmButton = styled.TouchableOpacity`
width: 90%;
height: 45px;
background-color: #FFF;
border-radius: 5px;
align-items: center;
justify-content: center;
margin-top: 15px;
`;
