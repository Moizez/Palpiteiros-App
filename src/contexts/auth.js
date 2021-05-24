import React, { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext({})

import axios from 'axios';
import SessionController from '../controllers/SessionController';
import UserController from '../controllers/UserController';

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

    useEffect(async () => {
        await loadChampionships()
    }, [])

    //Carregar usuário do AsyncStorage
    useEffect(async () => {
        const loadStorage = async () => {
            const storageUser = await SessionController.get('Auth_user')
            if (storageUser && storageUser.length > 0) {
                setUser(storageUser)
                setLoading(false)
            }
            setLoading(false)
        }
        await loadStorage()
    }, [])

    //Cadastrar de usuário
    const signUp = async (name, email, phone, password, cpf) => {
        await UserController.onSignUp(name, email, phone, password, cpf, getUser, () => getUser(null))
    }

    const getUser = async (data) => {
        setUser(data)
        await storageUser(data)
    }

    //Funcao para logar o usuário
    const signIn = async (email, password) => {
        await UserController.onSignIn(email, password, getUser, () => getUser(null))
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

