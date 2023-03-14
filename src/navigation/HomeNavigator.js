import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const Tab = createMaterialBottomTabNavigator();

export default function HomeNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    tabBarIcon: () => <AntDesign name="home" size={25}/>
                }}
                name="Home" component={HomeScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <AntDesign name="calendar" size={25} />
                }}
                name="Meals" component={HomeScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <AntDesign name="user" size={25}/>
                }}
                name="Profile" component={HomeScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Feather name="more-horizontal" size={25}/>
                }}
                name="More" component={HomeScreen} />
        </Tab.Navigator>
    );
}