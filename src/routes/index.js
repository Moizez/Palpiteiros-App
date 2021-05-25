import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
    const { signed, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#022c6f" />
            </View>
        )
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;