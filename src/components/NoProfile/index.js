import React from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

const NoProfile = () => {

	const colors = ['#ddd', '#f5f3f4']

	return (
		<AttributeBox>
			<Attribute style={styles.attribute} colors={colors}>
				<AttributeText>0</AttributeText>
				<AttributeLabel>total de palpite</AttributeLabel>
			</Attribute>

			<Attribute style={styles.attribute} colors={colors}>
				<AttributeText>0</AttributeText>
				<AttributeLabel>palpite exato</AttributeLabel>
			</Attribute>

			<Attribute style={styles.attribute} colors={colors}>
				<AttributeText>0</AttributeText>
				<AttributeLabel>vitória/empate</AttributeLabel>
			</Attribute>

			<Attribute style={styles.attribute} colors={colors}>
				<AttributeText>0</AttributeText>
				<AttributeLabel>total de ponto</AttributeLabel>
			</Attribute>

			<Attribute style={styles.attribute} colors={colors}>
				<AttributeText>0<AttributeText style={{ fontSize: 12 }}>%</AttributeText></AttributeText>
				<AttributeLabel>precisão de acerto</AttributeLabel>
			</Attribute>

			<Attribute style={styles.attribute} colors={colors}>
				<AttributeText>0</AttributeText>
				<AttributeLabel>total de bolão</AttributeLabel>
			</Attribute>

		</AttributeBox>
	)
}

const styles = StyleSheet.create({
	attribute: {
		elevation: 3
	}
})

const AttributeBox = styled.View`
flex: 1;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin-top: 20px;
`;

const Attribute = styled(LinearGradient)`
    height: 80px;
    width: 80px;
    border-radius: 10px;
    margin: 5px;
    align-items: center;
    justify-content: center;
    padding: 3px;
`;

const AttributeText = styled.Text`
    font-weight: bold;
    font-size: 22px;
    color: ${props => props.theme.mainColor};
`;

const AttributeLabel = styled.Text`
    text-transform: uppercase;
    font-size: 11px;
    text-align: center;
    color: ${props => props.theme.mainColor};
`;

export default NoProfile