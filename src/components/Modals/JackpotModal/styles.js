import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    height: 100%;
`;

export const CloseButton = styled.TouchableOpacity`
    width: 100%;
    align-items: flex-end;
    padding: 20px 10px;
`;

export const ModalHeader = styled.View`
    height: 70px;
    background-color: #022c6f;
`;

export const TopHeader = styled.View`
    flex-direction: row;
    align-items: center;
    height: 40px;
`;

export const SubHeader = styled.View`
    flex-direction: row;
`;

export const ImageBox = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: #FFF;
    height: 120px;
    width: 120px;
    border-radius: 60px;
    margin-top: -60px;
    margin-left: 10px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #022c6f;
    margin-left: 10px;
    font-weight: bold;
`;

export const ModalInfo = styled.View`
    flex: 1;
    background-color: #FFF;
    border-top-right-radius: 20px;
    margin-top: 10px;
    padding: 10px 8px;
`;

export const Info = styled.View`
    flex: 1;
    padding: 30px 10px 10px 10px;
`;

export const Description = styled.View`
    margin-top: 40px;
    margin-bottom: 20px;
    align-items: center;
`;

export const ButtonBox = styled.View`
    padding: 0 10px;
    margin-bottom: 25px;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 18px;
`;

export const Image = styled.Image`
    height: 80px;
    width: 80px;
`;

export const BoldText = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const Text = styled.Text`
    font-weight: normal;
`;

export const Divider = styled.View`
    width: 100%;
    height: 0.5px;
    background-color: #000;
    margin: 10px 0;
    opacity: 0.2;
`;


