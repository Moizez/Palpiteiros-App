import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
align-items: center;
justify-content: center;
background-color: #022c6f;
padding-bottom: 25px;
`;

export const Header = styled.View`
flex: 0.3;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: flex-start;
padding: 15px;
`;

export const CloseButton = styled.TouchableOpacity`
margin-right: 68px;
`;

export const Title = styled.Text`
font-size: 22px;
color: #FFF;
`;

export const BoxImage = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const ImageButton = styled.TouchableOpacity`
width: 100px;
height: 100px;
border-radius: 50px;
border-width: 2px;
border-color: #FFF;
align-items: center;
justify-content: center;
`;

export const Form = styled.View`
flex: 1;
width: 95%;
align-items: center;
justify-content: center;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#909590'
})`
background: rgba(0,0,0,0.20);
width: 80%;
height: 48px;
font-size: 13px;
color: #FFF;
margin-bottom: 15px;
padding: 10px;
border-radius: 5px;
`;

export const Status = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 15px;
`;

export const StatusButton = styled.TouchableOpacity`
width: 90px;
height: 90px;
border-radius: 45px;
border-width: 2px;
border-color: #FFF;
align-items: center;
justify-content: center;
`;

export const Label = styled.Text`
font-size: 15px;
color: #FFF;
`;

export const Select = styled.TouchableOpacity`
width: 80%;
height: 45px;
background-color: #FFF;
border-radius: 5px;
align-items: center;
justify-content: center;
`;
