import React from "react";

import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PostCard } from "../../../components/PostCard";

import { NewPostLogo } from "../../../../assets/img/Button";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";

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
    const data = [info, info, info, info];
    const navigation = useNavigation();
    return (
        <View className="flex-1 bg-white">
            <View className="px-6 py-1 flex-row justify-between items-center">
                <NewPostLogo />

                <View className="flex-row items-centers gap-x-4">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("notification")}
                    >
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("map")}
                    >
                        <Ionicons name="map-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex-1 px-6">
                <FlashList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => <PostCard post={item} />}
                    estimatedItemSize={10}
                />
            </View>
        </View>
    );
};

export default NewFeed;
