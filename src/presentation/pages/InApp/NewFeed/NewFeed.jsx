import React from "react";

import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PostCard } from "../../../components/PostCard";
import color from "../../../contants/color";
const NewFeed = () => {
    const info = {
        userImage: {
            uri: "https://photo.znews.vn/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg",
        },
        userName: "Esther Howard",
        postTime: "02:34 am",
        postImage: {
            uri: "https://photo.znews.vn/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg",
        },
        likes: "12K",
        comments: "12K",
        caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. 😁",
    };
    return (
        <>
            <View style={styles.header}>
                <Image
                    source={require("../../../../assets/img/new-post-icon.jpg")}
                />
                <View style={styles.headerIcons}>
                    <Ionicons
                        name="notifications-outline"
                        size={24}
                        color="black"
                    />
                    <Ionicons name="map-outline" size={24} color="black" />
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <PostCard post={info} />
                <PostCard post={info} />
                <PostCard post={info} />
                <PostCard post={info} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        padding: 20,

        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    headerIcons: {
        flexDirection: "row",
        width: 60,
        justifyContent: "space-between",
    },
    scrollView: {
        backgroundColor: color.white,
        padding: 20,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
    },
});

export default NewFeed;
