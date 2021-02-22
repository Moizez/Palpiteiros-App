import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage'

export const AuthContext = createContext({})

import axios from 'axios';
import api from '../services/api'

//Tokens da API do https://www.api-futebol.com.br/
//const token = 'Bearer test_104b8191a601fc61faa8cf0b2c3e1a'
const token = 'Bearer live_7df37af973031bf7169d41f48163d9'

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [championships, setChampionships] = useState([]);

    //Carregando a lista de campeonatos
    const loadChampionships = async () => {
        await axios.get('https://api.api-futebol.com.br/v1/campeonatos', {
            headers: {
                'Authorization': token
            }
        }).then((response) => {
            setChampionships(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        loadChampionships()
    }, [])

    //Carregar usuário do AsyncStorage
    useEffect(() => {
        const loadStorage = async () => {
            const storageUser = await AsyncStorage.getItem('Auth_user')
            if (storageUser) {
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
            setLoading(false)
        }
        loadStorage()
    }, [])

    //Cadastrar de usuário
    const signUp = async (name, email, phone, password, cpf) => {
        let response = await api.onSignUp(name, email, phone, password, cpf)
        setUser(response)
        storageUser(response)
    }

    //Funcao para logar o usuário
    const signIn = async (email, password) => {
        let response = await api.onSignIn(email, password)
        setUser(response)
        storageUser(response)
    }

    //Função para deslogar o usuário
    const logOut = async () => {
        await AsyncStorage.removeItem('Auth_user')
            .then(() => {
                setUser(null)
            })
    }

    //Função para adicionar o usuário no Async Storage
    const storageUser = async (data) => {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, championships, signIn, signUp, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

