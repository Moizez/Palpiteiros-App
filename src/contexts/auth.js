import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage'

export const AuthContext = createContext({})

import axios from 'axios';

//Url padrão da API 
let baseUrl = 'http://192.168.1.127:8080/api/users'
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
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        headers.append("Accept", 'application/json')

        const data = {
            name: name,
            email: email,
            phone: phone,
            password: password,
            cpf: cpf
        }

        console.log(name, cpf)

        await fetch(baseUrl,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            })
    }

    //Funcao para logar o usuário
    const signIn = async (email, password) => {
        if (email.trim().length == 0 || password.trim().length == 0) {
            return
        } else {

            const dado = {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
                credentials: 'same-origin',
                mode: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': 'csrftoken'
                }
            }

            const response = await fetch(`${baseUrl}/login`, dado)

            try {
                if (response.status == 200) {
                    const data = await response.json()
                    setUser(data)
                    storageUser(data)
                    return
                } else {
                    return
                }
            }
            catch (erro) {
                alert('Erro ao tentar fazer login: ' + erro)
            }
        }
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

