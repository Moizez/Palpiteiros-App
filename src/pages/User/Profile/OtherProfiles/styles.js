import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
background-color: #022c6f;
`;

export const Header = styled.View`
flex: 1;
width: 100%;
align-items: center;
justify-content: center;
`;

export const UserName = styled.Text`
font-size: 22px;
color: #FFF;
`;

export const Image = styled.Image`
width: 90px;
height: 90px;
border-radius: 45px;
border-width: 0.5px;
border-color: #FFF;
margin-bottom: 20px;
`;

export const GroupItem = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
`;



export const Box = styled.View`
flex: 2;
background-color: #fff;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
padding: 0 10px;
`;

export const InfoBox = styled.View`
flex: 1;
`;

export const InfoItem = styled.View(() => ({
    flex: 1,
    height: 100,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
    elevation: 5
}));

export const Line = styled.View`
width: 100%;
height: 1px;
background-color: #022c6f;
`;

export const ScoreBox = styled.View`
height: 140px;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
font-size: 22px;
color: #022c6f;
`;

export const Text = styled.Text`
font-size: 25px;
font-weight: bold;
color: #022c6f;
`;

export const Label = styled.Text`
font-size: 15px;
color: #022c6f;
text-transform: uppercase;
`;

