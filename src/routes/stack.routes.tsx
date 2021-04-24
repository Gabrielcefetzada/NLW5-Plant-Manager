import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Wellcome } from "../pages/Wellcome";
import { Userindentification } from "../pages/Userindentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";
import { PlantSave } from "../pages/PlantSave";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor:'white',
      },
    }}
  >
    <stackRoutes.Screen 
        name="Wellcome" 
        component={Wellcome} 
    />
    <stackRoutes.Screen
        name="UserIdentificationner"
        component={Userindentification}
    />
    <stackRoutes.Screen 
        name="Confirmation" 
        component={Confirmation} 
    />

    <stackRoutes.Screen 
        name="PlantSelect" 
        component={PlantSelect} 
    />

    <stackRoutes.Screen 
        name="PlantSave" 
        component={PlantSave} 
    />

  </stackRoutes.Navigator>
);

export default AppRoutes;