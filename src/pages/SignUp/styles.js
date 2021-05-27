import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
    padding: 0 35px;
`;

export const Title = styled.Text`
    color: #022c6f;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const Input = styled.TextInput`
    font-size: 16px;
    color: #022c6f;
    padding: 0 10px;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #022c6f;
    width: 100%;
    height: 50px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const Label = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const InputContainer = styled.View`
    width: 100%;
`;

export const InputBox = styled.View`
    width: 100%;
    height: 48px;
    border-radius: 5px;
    background-color: #CCC;
    margin-bottom: 10px;
    justify-content: center;
`;

export const ErrorBox = styled.View`
    align-self: flex-start;
`;

export const ErrorText = styled.Text`
    font-size: 11px;
    color: #c1121f;
    margin-top: -8px;
    margin-bottom: 3px;
`;

export const Text = styled.Text`
    font-size: 11px;
    color: #495057;
`;
