import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Main pages
import Jackpot from '../pages/User/Jackpot'
import Profile from '../pages/User/Profile'
import Games from '../pages/User/Games'
import Statistic from '../pages/User/Statistic'
import Setting from '../pages/User/Setting'

import GameButton from '../components/GameButton'

const AppTab = createBottomTabNavigator()

const icons = {
    Profile: {
        lib: MaterialCommunityIcons,
        name: 'shield-account'
    },
    Jackpot: {
        lib: MaterialCommunityIcons,
        name: 'trophy'
    },
    Statistic: {
        lib: FontAwesome,
        name: 'soccer-ball-o'
    },
    Setting: {
        lib: MaterialCommunityIcons,
        name: 'dots-vertical'
    },
}

const User = () => {

    return (
        <AppTab.Navigator
            initialRouteName='Jackpot'
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'Games') {
                        return (
                            <GameButton
                                onPress={() => navigation.navigate('Games')}
                                focused={focused}
                            />
                        )
                    }
                    const { lib: Icon, name } = icons[route.name]
                    return <Icon name={name} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#022c6f',
                    borderTopColor: '#022c6f',
                    height: 60,
                },
                activeTintColor: '#FFF',
                inactiveTintColor: '#92929C',
                labelStyle: {
                    marginBottom: 5
                }
            }}
        >

            <AppTab.Screen
                name='Jackpot'
                component={Jackpot}
                options={{
                    title: 'Bolão'
                }} />

            <AppTab.Screen
                name='Statistic'
                component={Statistic}
                options={{
                    title: 'Campeonatos'
                }} />

            <AppTab.Screen
                name='Games'
                component={Games}
                options={{
                    title: ''
                }} />

            <AppTab.Screen
                name='Profile'
                component={Profile}
                options={{
                    title: 'Perfil',
                }} />

            <AppTab.Screen
                name='Setting'
                component={Setting}
                options={{
                    title: 'Mais'
                }} />

        </AppTab.Navigator>

    );
}

export default User
