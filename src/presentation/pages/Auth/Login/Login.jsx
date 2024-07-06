import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import { Button, Heading, Input, Stack, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./styleLogin";
import authService from "../../../../services/auth.service";

const LoginScreen = () => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            const response = await authService.login(username, password);

            navigation.navigate("new-feed");
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Heading size="4xl">SPOTER</Heading>

            <Text style={styles.subtitle}>Millions of Destination</Text>

            <Stack space={4}>
                <Input
                    variant="underlined"
                    placeholder="Username"
                    w="100%"
                    value={username}
                    onChangeText={setUsername}
                />
                <Input
                    placeholder="Password"
                    w="100%"
                    variant="underlined"
                    value={password}
                    onChangeText={setPassword}
                />
                <Button isLoading={isLoading} onPress={handleLogin}>
                    Continue
                </Button>
            </Stack>

            <Text style={styles.orText}>or Log in with</Text>

            <View style={styles.socialContainer}>
                <FontAwesome name="facebook-square" size={40} color="#3b5998" />
                <AntDesign name="google" size={40} color="#DB4437" />
                <Ionicons name="logo-apple" size={40} color="black" />
                <Ionicons name="logo-whatsapp" size={40} color="#25D366" />
            </View>

            <Text
                style={styles.signUpText}
                onPress={() => navigation.navigate("register")}
            >
                Don't have an account yet?{" "}
                <Text style={styles.signUpLink}>Sign up</Text>
            </Text>
        </View>
    );
};

export default LoginScreen;
