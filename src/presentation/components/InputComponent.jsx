import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const InputComponent = ({
    value,
    onChangeText,
    text,
    placeholder,
    isPassword = false,
    affix = "",
    suffix = "",
}) => {
    return (
        <View className="">
            <View>
                {text && (
                    <Text className="text-gray-700 mb-1 ml-4">{text}</Text>
                )}
            </View>
            <View className="flex-row item-center justify-center items-center px-5 py-2 rounded-[35px] shadow border border-neutral-300 my-2  h-12">
                {affix && affix}
                <TextInput
                    secureTextEntry={isPassword}
                    value={value}
                    className="flex-1 px-5 text-neutral-600 text-base font-normal font-['Montserrat'] leading-none tracking-tight"
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    placeholderTextColor="gray"
                    style={{
                        padding: 0,
                        margin: 0,
                    }}
                />
                {suffix && suffix}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default InputComponent;
