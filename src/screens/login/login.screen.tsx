import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "@rneui/themed";
import { StackActions, useNavigation } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@utils/firebase";

const LoginScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                navigation.dispatch(StackActions.replace("Home"));
            }
        });
        return unsubscribe;
    }, []);

    const signIn = () => {};

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png",
                }}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input
                    textContentType="emailAddress"
                    placeholder="Email"
                    autoFocus
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>

            <View style={styles.inputContainer}>
                <Input
                    textContentType="password"
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
            </View>

            <Button
                containerStyle={styles.button}
                onPress={signIn}
                title="Login"
            />
            <Button
                containerStyle={styles.button}
                onPress={() => navigation.navigate("Register")}
                title="Register"
                type="outline"
            />
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
