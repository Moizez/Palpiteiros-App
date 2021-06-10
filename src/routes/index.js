import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import LoadScreen from '../components/LoadScreen'

const Routes = () => {
    const { signed, loading } = useContext(AuthContext)
    const [time, setTime] = useState(true)

    setTimeout(() => {
        setTime(loading)
    }, 2500)

    if (time) {
        return <LoadScreen loadMessage={'Prove que vocẽ realmente\n entende de futebol!'}/>
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes