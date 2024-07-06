import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const AuthNavgation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
    );
};
export default AuthNavgation;
