import { Ionicons } from "@expo/vector-icons"; // Thư viện icons
import { ImageBackground, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getColors } from "react-native-image-colors";
import UserInfo from "./UserInfo";

import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { hexToRgba } from "../../helpers/hexToRgba";
import { Pin } from "../../assets/img/Button";
export const PostCard = ({ post }) => {
    const {
        userImage,
        userName = "Thao Nguyen",
        createdAt,
        images,
        likes = Math.floor(Math.random() * 100),
        comments = Math.floor(Math.random() * 100),
        description,
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
                const color = await getColors(images[0], {
                    fallback: "#fff",
                    cache: true,
                    key: images[0],
                    quality: "highest",
                });
                setColors(color);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [images]);

    const navigation = useNavigation();

    const toggleLike = () => {
        setLikeNumber((cur) => (liked ? cur - 1 : cur + 1));
        setLiked((cur) => !cur);
    };

    return (
        <View className={` mb-5 rounded-3xl overflow-hidden`}>
            <LinearGradient
                dither={true}
                start={{ x: 0, y: 1 }}
                colors={[
                    hexToRgba(colors.primary, 0.25),
                    hexToRgba(colors.detail, 0.25),
                ]}
            >
                <ImageBackground
                    source={{ uri: images[0] }}
                    className="h-[375] p-[14] flex-col justify-between shadow"
                    imageStyle={{ borderRadius: 24 }}
                    resizeMode="cover"
                >
                    <View className="flex-row justify-between">
                        <UserInfo
                            userImage={userImage}
                            userName={userName}
                            postTime={createdAt}
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
                                onPress={() =>
                                    navigation.navigate("save", {
                                        postImage: images[0],
                                    })
                                }
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
                    className={`px-6 pt-4 pb-[10]`}
                    onPress={() => navigation.navigate("detail-post", { post })}
                >
                    <Text className="text-black text-[14px] font-normal font-['Montserrat']">
                        {description}
                    </Text>
                    <View className="flex-row items-center justify-end">
                        <Pin className="mr-[5]" />
                        <Text className=" text-neutral-600 text-[10px] font-normal font-['Montserrat']">
                            Los Angeles, CA
                        </Text>
                    </View>
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
