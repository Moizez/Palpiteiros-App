import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ManagerHome from '../pages/Manager/ManagerHome'
import SearchProducers from '../pages/Manager/SearchProducers'
import ProducerForm from '../pages/Manager/ProducerForm'
import ManagerSchedules from '../pages/Manager/ManagerSchedules'
import Settings from '../pages/Settings'

import FormButton from '../components/FormButton'

const ManagerTab = createBottomTabNavigator()

const icons = {
    ManagerHome: {
        lib: MaterialCommunityIcons,
        name: 'home'
    },
    SearchProducers: {
        lib: MaterialCommunityIcons,
        name: 'magnify'
    },
    ManagerSchedules: {
        lib: MaterialCommunityIcons,
        name: 'calendar-month'
    },
    Settings: {
        lib: MaterialCommunityIcons,
        name: 'dots-vertical'
    },

}

const Manager = () => {
    return (
        <ManagerTab.Navigator
            initialRouteName='ManagerHome'
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, focused }) => {
                    if (route.name === 'ProducerForm') {
                        return (
                            <FormButton
                                onPress={() => navigation.navigate('ProducerForm')}
                                focused={focused}
                            />
                        )
                    }
                    const { lib: Icon, name } = icons[route.name]
                    return <Icon name={name} color={color} size={28} />
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#292b2c',
                    borderTopColor: 'rgba(0,0,0,0.5)',
                    height: 60,
                },
                activeTintColor: '#FFF',
                labelStyle: {
                    fontSize: 11,
                    marginBottom: 5
                }
            }}
        >

            <ManagerTab.Screen
                name='ManagerHome'
                component={ManagerHome}
                options={{
                    title: 'Início'
                }}
            />

            <ManagerTab.Screen
                name='SearchProducers'
                component={SearchProducers}
                options={{
                    title: 'Pesquisar'
                }}
            />

            <ManagerTab.Screen
                name='ProducerForm'
                component={ProducerForm}
                options={{
                    title: ''
                }}
            />

            <ManagerTab.Screen
                name='ManagerSchedules'
                component={ManagerSchedules}
                options={{
                    title: 'Tarefas'
                }}
            />

            <ManagerTab.Screen
                name='Settings'
                component={Settings}
                options={{
                    title: 'Mais'
                }}
            />
        </ManagerTab.Navigator>
    )
}

export default Manager