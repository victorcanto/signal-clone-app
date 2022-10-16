import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import LoginScreen from "@screens/login";
import RegisterScreen from "@screens/register";
import HomeScreen from "@screens/home";

import { RootStackParamList } from "navigation/types";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const globalScreenOptions: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor: "#2C6BED" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
    headerTitleAlign: "center",
};

const AppRoutes = () => {
    return (
        <Navigator screenOptions={globalScreenOptions} initialRouteName="Login">
            <Screen name="Login" component={LoginScreen} />
            <Screen name="Register" component={RegisterScreen} />
            <Screen name="Home" component={HomeScreen} />
        </Navigator>
    );
};

export default AppRoutes;
