import React, { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext({})

import axios from 'axios';
import api from '../services/api'
import SessionController from '../controllers/SessionController';

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
            const storageUser = await SessionController.get('Auth_user')
            if (storageUser && storageUser.length > 0) {
                setUser(storageUser)
                setLoading(false)
            }
            setLoading(false)
        }
        loadStorage()
    }, [])

    //Cadastrar de usuário
    const signUp = async (name, email, phone, password, cpf) => {
        const response = await api.onSignUp(name, email, phone, password, cpf)
        setUser(response)
        storageUser(response)
    }

    //Funcao para logar o usuário
    const signIn = async (email, password) => {
        const response = await api.onSignIn(email, password)
        setUser(response)
        storageUser(response)
    }

    //Função para deslogar o usuário
    const logOut = async () => {
        await SessionController.remove('Auth_user')
            .then(() => {
                setUser(null)
            })
    }

    //Função para adicionar o usuário no Async Storage
    const storageUser = async (data) => {
        await SessionController.create('Auth_user', data)
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user, user, loading, championships,
            signIn, signUp, logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

