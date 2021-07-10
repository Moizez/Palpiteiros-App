import React from 'react'
import { StyleSheet } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'

import Loading from '../../../../../components/Loading'
import { changeLvColor } from '../../../../../helpers/data'

import {
	Container, InfoBox, LvBox, Label, Box, AttributeBox, Attribute, LvInfo,
	Lv, AttributeText, AttributeLabel
} from './styles'

const UserRanking = ({ data, loading }) => {

	const colors = ['#ddd', '#f5f3f4']
	const percent = data?.entryLevel?.level?.percent
	const color = changeLvColor(data?.entryLevel?.level?.valuelevel)

	return (
		<>
			<Container showsVerticalScrollIndicator={false}>
				<Box>
					<InfoBox>
						<LvBox>
							<LvInfo>
								{percent >= 0 ?
									<ProgressCircle
										percent={percent}
										radius={70}
										borderWidth={3}
										color={color}
										shadowColor="#ddd"
										bgColor="#fff"
										containerStyle={{ alignItems: 'center', justifyContent: 'center' }}
									>
										<Lv color={color} size={data?.entryLevel?.level?.valuelevel}>
											{data?.entryLevel?.level?.valuelevel}
											<Lv color={color} style={{ fontSize: 20 }}>lv</Lv></Lv>
										<Label>
											{data?.entryLevel?.level?.valueCurrent}/
											{data?.entryLevel?.level?.valueLimit}
										</Label>
									</ProgressCircle>
									: null
								}
							</LvInfo>

						</LvBox>

						{data?.rankings?.map(rank =>
							<AttributeBox key={rank.id}>
								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>{data?.hunches?.length}</AttributeText>
									<AttributeLabel>total de palpite{data?.hunches?.length > 1 && 's'}</AttributeLabel>
								</Attribute>

								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>{rank?.totalAccuracy}</AttributeText>
									<AttributeLabel>{
										rank?.totalAccuracy > 1
											? 'palpites exatos'
											: 'palpite exato'
									}
									</AttributeLabel>
								</Attribute>

								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>{rank?.totalHits}</AttributeText>
									<AttributeLabel>{
										rank?.totalHits > 1
											? 'vitórias/empates'
											: 'vitória/empate'
									}
									</AttributeLabel>
								</Attribute>

								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>{rank?.totalPoints}</AttributeText>
									<AttributeLabel>total de ponto{rank?.totalPoints > 1 && 's'}</AttributeLabel>
								</Attribute>

								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>
										{data?.percent}
										<AttributeText style={{ fontSize: 12 }}>
											%
										</AttributeText>
									</AttributeText>
									<AttributeLabel>precisão de acertos</AttributeLabel>
								</Attribute>

								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>{data?.totalJackpots}</AttributeText>
									<AttributeLabel>total de bol{
										data?.totalJackpots > 1
											? 'ões'
											: 'ão'
									}
									</AttributeLabel>
								</Attribute>

							</AttributeBox>
						)}
					</InfoBox>
				</Box>
			</Container>
			{loading &&
				<Loading
					lottie={require('../../../../../assets/lotties/loading.json')}
					bgColor='#FFF'
				/>
			}
		</>
	)
}

const styles = StyleSheet.create({
	attribute: {
		elevation: 3
	}
})

export default UserRanking