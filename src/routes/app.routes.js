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
import OtherProfiles from '../pages/User/Profile/OtherProfiles'
import Regulation from '../pages/User/Setting/Regulation'
import EditProfile from '../pages/User/Profile/EditProfile'

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
            <Stack.Screen name='OtherProfiles' component={OtherProfiles} />
            <Stack.Screen name='Regulation' component={Regulation} />
            <Stack.Screen name='EditProfile' component={EditProfile} />
        </Stack.Navigator>
    )

}

export default AppRoutes
