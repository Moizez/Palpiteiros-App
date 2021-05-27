import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.View`
    flex: 1;
    justify-content: center;
    margin-top: 30px;
`;

export const BoxIcon = styled.TouchableOpacity`
    height: 48px;
    width: 45px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: #ddd;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #022c6f;
    padding: 0 10px;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #022c6f;
    min-width: 100%;
    height: 50px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const Title = styled.Text`
    color: #022c6f;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const Label = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const Link = styled.TouchableOpacity`
`;

export const BoxLink = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

export const LinkText = styled.Text`
    color: #022c6f;
`;

export const InputContainer = styled.View`
    width: 100%;
`;

export const InputBox = styled.View`
    width: 100%;
    height: 48px;
    border-radius: 5px;
    flex-direction: row;
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