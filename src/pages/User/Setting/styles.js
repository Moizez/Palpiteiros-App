import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.SafeAreaView`
    width: 100%;
    height: 100px;
    background-color: #022c6f;
    padding: 10px;
`;

export const Title = styled.Text`
    color: #5c5c5c;
    font-size: 20px;
`;

export const PageBox = styled.View`
    flex: 1;
    background-color: #e3e3e3;
    border-top-left-radius: 20px;
    margin-top: -50px;
    padding: 20px;
`;