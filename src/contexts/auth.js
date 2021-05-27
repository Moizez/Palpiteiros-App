import React, { useState, useEffect, createContext, Fragment } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Modal } from 'react-native'

import WarningModal from '../components/Modals/WarningModal'
import api from '../services/api'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [warningModal, setWarningModal] = useState(false)
    const [message, setMessage] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loadStorage = async () => {
            const storageUser = await AsyncStorage.getItem('@palpiteiros:user')
            if (storageUser) {
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
            setLoading(false)
        }
        loadStorage()
    }, [])

    const handleOpenWarningModal = () => setWarningModal(true)
    const handleCloseWarningModal = () => setWarningModal(false)

    const handleSignIn = async (email, password) => {
        setLoadingAuth(true)
        const response = await api.onSignIn(email, password)

        if (response.data) {
            setUser(response.data)
            storageUser(response.data)
            setLoadingAuth(false)
            return
        } else {
            setLoadingAuth(false)
            setMessage('E-mail ou senha inválidos!')
            handleOpenWarningModal()
            return
        }
    }

    const handleSignUp = async (values) => {
        setLoadingAuth(true)
        const response = await api.onSignUp(values)

        if (response.data) {
            setUser(response.data)
            storageUser(response.data)
            setLoadingAuth(false)
            return
        } else {
            setLoadingAuth(false)
            setMessage('E-mail ou senha inválidos!')
            handleOpenWarningModal()
            return
        }
    }

    //Função para deslogar o usuário
    const logOut = async () => {
        await AsyncStorage.clear()
            .then(() => setUser(null))
    }

    //Função para adicionar o usuário no Async Storage
    const storageUser = async (data) => {
        await AsyncStorage.setItem('@palpiteiros:user', JSON.stringify(data))
    }

    return (

        <Fragment>
            <Modal
                animationType='fade'
                transparent={true}
                visible={warningModal}
            >
                <WarningModal
                    closeModal={handleCloseWarningModal}
                    message={message}
                    bgColor
                />
            </Modal>

            <AuthContext.Provider value={{
                signed: !!user, user,
                loading, loadingAuth,
                handleSignIn, handleSignUp, logOut
            }}>
                {children}
            </AuthContext.Provider>
        </Fragment>
    )
}

export default AuthProvider

