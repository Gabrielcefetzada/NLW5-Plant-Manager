import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Wellcome } from '../pages/Wellcome';
import { Confirmation } from '../pages/Confirmation';
import { Userindentification } from '../pages/Userindentification';

const stackRoutes = createStackNavigator()
const AppRoutes: React.FC = ()  => (
    <stackRoutes.Navigator 
    headerMode="none"
    screenOptions={{
        cardStyle: {
            backgroundColor: 'white'
        }
    }}
    >
        <stackRoutes.Screen
        name="Wellcome"
        component={Wellcome} />

        <stackRoutes.Screen
        name="UserIdentificationner"
        component={Userindentification} />

        <stackRoutes.Screen
        name="confirmation"
        component={Confirmation} />

    </stackRoutes.Navigator>
)

export default AppRoutes;