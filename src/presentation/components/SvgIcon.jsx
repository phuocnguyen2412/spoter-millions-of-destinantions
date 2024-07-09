import React from "react";
import { SvgProps } from "react-native-svg";

const SvgIcon = ({ Icon, width, height, color }) => {
    return <Icon width={width} height={height} fill={color} />;
};

export default SvgIcon;
