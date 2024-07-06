import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import { createStackNavigator } from "@react-navigation/stack";
import SuccessScreen from "../pages/Auth/Register/SuccessScreen";
const Stack = createStackNavigator();

const AuthNavgation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="success" component={SuccessScreen} />
        </Stack.Navigator>
    );
};
export default AuthNavgation;
