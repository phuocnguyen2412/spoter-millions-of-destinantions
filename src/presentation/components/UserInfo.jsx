import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const UserInfo = ({
    userImage = {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-hjuFaNMnEAp28Q9Mo7x6QK_IyHnKdOqqA&s",
    },
    postTime,
    userName,
    textDark = false,
    disableAdd = false,
    style,
}) => {
  
    const styles = StyleSheet.create({
        userImage: {
            width: 40,
            height: 40,
            borderRadius: 40,
            marginRight: 10,
        },

        userName: {
            color: textDark ? "black" : "white",
            textShadowColor: !textDark ? "rgba(0, 0, 0, 0.60)" : undefined,
            textShadowOffset: !textDark ? { width: 0, height: 2 } : undefined,
            textShadowRadius: !textDark ? 4 : undefined,
        },
        postTime: {
            color: textDark ? "black" : "white",
            textShadowColor: !textDark ? "rgba(0, 0, 0, 0.60)" : undefined,
            textShadowOffset: !textDark ? { width: 0, height: 2 } : undefined,
            textShadowRadius: !textDark ? 4 : undefined,
        },
        follow: {
            position: "absolute",
            top: 28,
            left: 28,
        },
    });
    return (
        <View className="relative flex-row" style={style}>
            <Image source={userImage} style={styles.userImage} />
            {!disableAdd && (
                <Image
                    source={require("../../assets/img/follow-icon.png")}
                    style={styles.follow}
                />
            )}
            <View className="ml-2">
                <Text
                    style={styles.userName}
                    className="text-sm font-medium font-['Montserrat'] leading-none tracking-tight mb-[2]"
                >
                    {userName}
                </Text>
                <Text
                    style={styles.postTime}
                    className="text-[11px] font-light font-['Montserrat'] leading-3"
                >
                    {postTime}
                </Text>
            </View>
        </View>
    );
};

export default UserInfo;
