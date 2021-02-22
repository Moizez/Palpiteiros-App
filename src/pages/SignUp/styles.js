import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items: center;
justify-content: center;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#022c6f'
})`
background: rgba(0,0,0,0.20);
width: 81%;
font-size: 17px;
color: #022c6f;
margin-bottom: 15px;
padding: 10px;
border-radius: 7px;
`;

export const Button = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: #022c6f;
width: 81%;
height: 45px;
border-radius: 7px;
margin-top: 10px;
`;

export const Label = styled.Text`
font-size: 20px;
color: #FFF;
`;
