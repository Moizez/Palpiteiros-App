import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

//Roles import
import User from '../roles/User'

//Pages
import CreateJackpot from '../pages/User/Jackpot/MyJackpot/CreateJackpot'
import ChampionshipSelection from '../pages/User/Jackpot/MyJackpot/CreateJackpot/ChampionshipSelection'
import JackpotDetails from '../pages/User/Jackpot/JackpotDetails'

import Leaderboard from '../pages/Leaderboard'
import Hunchs from '../pages/User/Games/Hunchs'


const Stack = createStackNavigator()

const AppRoutes = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='User' component={User} />
            <Stack.Screen name='CreateJackpot' component={CreateJackpot} />
            <Stack.Screen name='ChampionshipSelection' component={ChampionshipSelection} />
            <Stack.Screen name='JackpotDetails' component={JackpotDetails} />
            <Stack.Screen name='Leaderboard' component={Leaderboard} />
            <Stack.Screen name='Hunchs' component={Hunchs} />
        </Stack.Navigator>
    )

}

export default AppRoutes
