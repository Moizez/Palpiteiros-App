import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'

import { AuthContext } from '../../../contexts/auth'
import ActionModal from '../../../components/Modals/ActionModal'

import { Container, Header, PageBox } from './styles'

const Setting = () => {

    const { logOut } = useContext(AuthContext)
    const navigation = useNavigation()
    const [actionModal, setActionModal] = useState(false)

    const handleLogout = () => openActioModal()

    const handleConfirm = () => {
        openActioModal()
        logOut()
    }

    const openActioModal = () => setActionModal(true)
    const closeActionModal = () => setActionModal(false)

    return (
        <Container>

            <Modal
                animationType='fade'
                transparent={true}
                visible={actionModal}
            >
                <ActionModal
                    closeModal={closeActionModal}
                    confirmModal={handleConfirm}
                    title='Deseja realmente sair?'
                />
            </Modal>

            <Header>
                <Text style={styles.title}>Configurações</Text>
            </Header>

            <PageBox>
                <TouchableOpacity style={styles.item}>
                    <Icon name='bell-outline' color={'#292b2c'} size={35} />
                    <Text style={styles.text}>Notificações</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', height: 0.5, backgroundColor: '#adb5bd' }}></View>

                <TouchableOpacity onPress={() => navigation.navigate('Regulation')} style={styles.item}>
                    <Icon name='clipboard-alert-outline' color={'#292b2c'} size={35} />
                    <Text style={styles.text}>Regulamento</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', height: 0.5, backgroundColor: '#adb5bd' }}></View>

                <TouchableOpacity style={styles.item}>
                    <Icon name='help-circle-outline' color={'#292b2c'} size={35} />
                    <Text style={styles.text}>Perguntas frequentes</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', height: 0.5, backgroundColor: '#adb5bd' }}></View>

                <TouchableOpacity style={styles.item}>
                    <Icon name='cellphone' color={'#292b2c'} size={35} />
                    <Text style={styles.text}>Contatos</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', height: 0.5, backgroundColor: '#adb5bd' }}></View>

                <TouchableOpacity style={styles.item}>
                    <Icon name='shield-lock-outline' color={'#292b2c'} size={35} />
                    <Text style={styles.text}>Política de privacidade</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', height: 0.5, backgroundColor: '#adb5bd' }}></View>

                <TouchableOpacity style={styles.item}>
                    <Icon name='star-outline' color={'#292b2c'} size={35} />
                    <Text style={styles.text}>Avaliar aplicativo</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', height: 0.5, backgroundColor: '#adb5bd' }}></View>

                <TouchableOpacity style={styles.item} onPress={() => handleLogout()}>
                    <Icon name='exit-to-app' color={'#da1e37'} size={35} />
                    <Text style={styles.text}>Sair</Text>
                </TouchableOpacity>
            </PageBox>

            <View style={styles.versionContainer}>
                <Text>Palpiteiros</Text>
                <Text style={{ color: '#adb5bd', marginBottom: 25 }}>v2021.06.17</Text>
            </View>
        </Container >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.2,
        backgroundColor: '#292b2c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        color: '#FFF',

    },
    itemContainer: {
        flex: 1,
        margin: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 17,
        marginLeft: 15,
    },
    versionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e3e3e3'
    },
})

export default Setting