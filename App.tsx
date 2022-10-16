import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from "routes/AppRoutes";

const App = () => {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    );
};

export default App;
