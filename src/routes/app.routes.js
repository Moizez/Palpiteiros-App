import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Main pages
import Jackpot from '../pages/Jackpot'
import Profile from '../pages/Profile'
import Home from '../pages/Home'
import Statistic from '../pages/Statistic'
import Setting from '../pages/Setting'
import GameButton from '../components/GameButton'
import JackporDetails from '../pages/JackporDetails'

//Secundary pages
import CreateJackpot from '../pages/Jackpot/MyJackpotTab/CreateJackpot'
import SelectChampionship from '../pages/Jackpot/MyJackpotTab/CreateJackpot/SelectChampionship'

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
        lib: MaterialCommunityIcons,
        name: 'chart-line'
    },
    Setting: {
        lib: MaterialCommunityIcons,
        name: 'dots-vertical'
    },
}

const AppRoutes = () => {

    return (
        <AppTab.Navigator
            initialRouteName='Home'
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'Home') {
                        return (
                            <GameButton
                                onPress={() => navigation.navigate('Home')}
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
                name='Profile'
                component={Profile}
                options={{
                    title: 'Perfil',
                }} />

            <AppTab.Screen
                name='Jackpot'
                component={Jackpot}
                options={{
                    title: 'Bolão'
                }} />

            <AppTab.Screen
                name='Home'
                component={Home}
                options={{
                    title: ''
                }} />

            <AppTab.Screen
                name='Statistic'
                component={Statistic}
                options={{
                    title: 'Estatística'
                }} />

            <AppTab.Screen
                name='Setting'
                component={Setting}
                options={{
                    title: 'Mais'
                }} />

            <AppTab.Screen
                name='CreateJackpot'
                component={CreateJackpot}
                options={{
                    tabBarButton: () => null,
                }} />

            <AppTab.Screen
                name='SelectChampionship'
                component={SelectChampionship}
                options={{
                    tabBarButton: () => null,
                }} />

            <AppTab.Screen
                name='JackporDetails'
                component={JackporDetails}
                options={{
                    tabBarButton: () => null,
                }} />

        </AppTab.Navigator>

    );
}

export default AppRoutes
