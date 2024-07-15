import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Thư viện icons

import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import UserInfo from "./UserInfo";
import { getColors } from "react-native-image-colors";

import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
export const PostCard = ({ post }) => {
    const {
        userImage,
        userName,
        postTime,
        postImage,
        likes,
        comments,
        caption,
    } = post;

    const [liked, setLiked] = useState(false);
    const [likeNumber, setLikeNumber] = useState(likes);
    const [colors, setColors] = useState({
        average: "#fff",
        vibrant: "#fff",
        dominant: "#fff",
    });

    useEffect(() => {
        (async () => {
            try {
                const color = await getColors(postImage, {
                    fallback: "#fff",
                    cache: true,
                    key: postImage,
                    quality: "highest",
                });
                setColors(color);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [postImage]);
    console.log(colors);
    const navigation = useNavigation();

    const toggleLike = () => {
        setLikeNumber((cur) => (liked ? cur - 1 : cur + 1));
        setLiked((cur) => !cur);
    };
    return (
        <View className={` mb-5 rounded-3xl overflow-hidden`}>
            <LinearGradient
                colors={[`${colors.dominant}/40`, `${colors.vibrant}/40`]}
            >
                <ImageBackground
                    source={{ uri: postImage }}
                    className="h-[375] overflow-hidden p-[14] flex-col justify-between"
                    imageStyle={{ borderRadius: 24 }}
                >
                    <View className="flex-row justify-between">
                        <UserInfo
                            userImage={userImage}
                            userName={userName}
                            postTime={postTime}
                        />

                        <Ionicons
                            name="ellipsis-horizontal"
                            size={24}
                            color="white"
                        />
                    </View>
                    <View className="flex-row justify-between">
                        <View className="flex-row" style={{ gap: 9 }}>
                            <Button
                                text={likeNumber}
                                onPress={toggleLike}
                                icon={
                                    <Ionicons
                                        name={liked ? "heart" : "heart-outline"}
                                        size={20}
                                        color={liked ? "red" : "white"}
                                    />
                                }
                            />
                            <Button
                                text={comments}
                                onPress={() =>
                                    navigation.navigate("detail-post", { post })
                                }
                                icon={
                                    <Ionicons
                                        name="chatbubble-outline"
                                        size={20}
                                        color="white"
                                    />
                                }
                            />
                        </View>
                        <View className="flex-row" style={{ gap: 9 }}>
                            <Button
                                icon={
                                    <Ionicons
                                        name="paper-plane-outline"
                                        size={20}
                                        color="white"
                                    />
                                }
                            />
                            <Button
                                icon={
                                    <Ionicons
                                        name="bookmark-outline"
                                        size={20}
                                        color="white"
                                    />
                                }
                            />
                        </View>
                    </View>
                </ImageBackground>

                <TouchableOpacity
                    className={`p-6`}
                    onPress={() => navigation.navigate("detail-post", { post })}
                >
                    <Text className="text-black text-[13px] font-normal font-['Montserrat']">
                        {caption}
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};
const Button = ({ text, icon, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="rounded-[14px] overflow-hidden"
        >
            <BlurView
                intensity={40}
                tint="light"
                className="px-[14] py-[13] flex-row justify-center items-center gap-x-[4] bg-neutral-50/40 "
            >
                {icon}
                {text && (
                    <Text className="text-center text-neutral-50 text-xs font-semibold font-['Montserrat']">
                        {text}
                    </Text>
                )}
            </BlurView>
        </TouchableOpacity>
    );
};
