import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

export default function HomeNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    );
}