import { Input } from "native-base";
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import authService from "../../../../services/auth.service";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
    const [userInfo, setUserInfo] = useState({});
    const navigation = useNavigation();
    const inputStyle = "p-3 ";
    const handleRegister = async () => {
        try {
            const { confirmPassword, ...data } = userInfo;
            await authService.register(data);
            navigation.navigate("success");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View className="p-4">
            <Text>Create a new account</Text>
            <Input
                value={userInfo.name}
                onChangeText={(e) => setUserInfo({ ...userInfo, name: e })}
                placeholder="Full name"
                className={inputStyle}
            />
            <Input
                value={userInfo.username}
                onChangeText={(e) => setUserInfo({ ...userInfo, username: e })}
                placeholder="User name"
                className={inputStyle}
            />
            <Input
                value={userInfo.email}
                onChangeText={(e) => setUserInfo({ ...userInfo, email: e })}
                placeholder="Email"
                className={inputStyle}
            />
            <Input
                value={userInfo.password}
                onChangeText={(e) => setUserInfo({ ...userInfo, password: e })}
                placeholder="Password"
                className={inputStyle}
            />
            <Input
                value={userInfo.confirmPassword}
                onChangeText={(e) =>
                    setUserInfo({ ...userInfo, confirmPassword: e })
                }
                placeholder="Confirm your password"
                className={inputStyle}
            />
            <Button className="m-4" onPress={handleRegister} title="Continue" />
        </View>
    );
};

export default Register;
