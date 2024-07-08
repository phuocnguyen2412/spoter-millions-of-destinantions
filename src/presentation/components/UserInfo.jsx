import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const UserInfo = ({ userImage, postTime, userName, textDark = false }) => {
    const styles = StyleSheet.create({
        userImage: {
            width: 40,
            height: 40,
            borderRadius: 40,
            marginRight: 10,
        },
        userInfo: {
            flex: 1,
        },
        userName: {
            color: textDark ? "black" : "white",
            fontFamily: "Montserrat-Medium",
            fontSize: 14,
            fontWeight: "500",
            textShadowColor: !textDark ? "rgba(0, 0, 0, 0.60)" : undefined,
            textShadowOffset: !textDark ? { width: 0, height: 2 } : undefined,
            textShadowRadius: !textDark ? 4 : undefined,
            letterSpacing: 0.28,
        },
        postTime: {
            color: textDark ? "black" : "white",
            fontFamily: "Montserrat-Medium",
            fontSize: 12,
            fontWeight: "300",
            textShadowColor: !textDark ? "rgba(0, 0, 0, 0.60)" : undefined,
            textShadowOffset: !textDark ? { width: 0, height: 2 } : undefined,
            textShadowRadius: !textDark ? 4 : undefined,
            letterSpacing: 0.28,
        },
        follow: {
            position: "absolute",
            top: 28,
            left: 28,
        },
    });
    return (
        <>
            <Image source={userImage} style={styles.userImage} />
            <Image
                source={require("../../assets/img/follow-icon.png")}
                style={styles.follow}
            />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{userName}</Text>
                <Text style={styles.postTime}>{postTime}</Text>
            </View>
        </>
    );
};

export default UserInfo;
