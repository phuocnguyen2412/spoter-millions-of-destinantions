import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const FloatingButtonComponent = ({ Icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} className="w-10 h-10 rounded-[5]">
            <Icon />
        </TouchableOpacity>
    );
};

export default FloatingButtonComponent;
