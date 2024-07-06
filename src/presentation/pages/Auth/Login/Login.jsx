import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import {
    Button,
    Heading,
    Icon,
    Input,
    Pressable,
    Stack,
    Text,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./styleLogin";

const LoginScreen = () => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Heading size="4xl">SPOTER</Heading>

            <Text style={styles.subtitle}>Millions of Destination</Text>

            <Stack space={4}>
                <Input variant="underlined" placeholder="Username" w="100%" />
                <Input placeholder="Password" w="100%" variant="underlined" />
                <Button
                    isLoading={isLoading}
                    onPress={() => navigation.replace("in-app")}
                >
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
                Don't have an account yet?
                <Text style={styles.signUpLink}>Sign up</Text>
            </Text>
        </View>
    );
};

export default LoginScreen;
