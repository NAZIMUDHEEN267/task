import { NavigationContainer } from '@react-navigation/native';
import SignNavigator from './SignNavigator';

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <SignNavigator />
        </NavigationContainer>
    );
}