import { createStackNavigator } from '@react-navigation/stack';
import SignScreen from '../screens/SignScreen';
import HomeNavigator from './HomeNavigator';

const Stack = createStackNavigator();

export default function SignNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName={"HomeTab"}>
            <Stack.Screen name="Sign" component={SignScreen} />
            <Stack.Screen name="HomeTab" component={HomeNavigator} />
        </Stack.Navigator>
    );
}