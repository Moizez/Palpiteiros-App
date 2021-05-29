import React, { useState, useEffect, createContext } from 'react'
import { Modal } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../services/api'
import Snackbar from '../components/Snackbar'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [showSnack, setShowSnack] = useState(false)
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


    const handleSignIn = async (email, password) => {
        setLoadingAuth(true)
        const response = await api.onSignIn(email, password)

        if (response.data) {
            setUser(response.data)
            storageUser(response.data)
            setLoadingAuth(false)
            return
        } else if (response.status === 404) {
            setLoadingAuth(false)
            setMessage('E-mail ou senha inválidos!')
            handleShowSnack()
            return
        } else {
            setLoadingAuth(false)
            setMessage(`Falha inesperada! Erro: ${response.status}`)
            handleShowSnack()
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
        } else if (response.status === 404) {
            setLoadingAuth(false)
            setMessage('E-mail ou senha inválidos!')
            handleShowSnack()
            return
        } else {
            setLoadingAuth(false)
            setMessage(`Falha inesperada! Erro: ${response.status}`)
            handleShowSnack()
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

    const handleShowSnack = () => setShowSnack(true)
    const handleCloseSnack = () => setShowSnack(false)

    return (

        <>
            <Modal
                visible={showSnack}
                animationType='fade'
                transparent={true}
            >
                <Snackbar
                    message={message}
                    onDismiss={handleCloseSnack}
                    hasColor
                />
            </Modal>


            <AuthContext.Provider value={{
                signed: !!user, user,
                loading, loadingAuth,
                handleSignIn, handleSignUp, logOut
            }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider

