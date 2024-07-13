import { Image } from "expo-image";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import UserInfo from "../../../components/UserInfo";
import { useNavigation, useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import Accordion from "../../../components/Accordion";
import feedService from "../../../../services/feed.service";
import { Delete } from "../../../../assets/img/Button";
import { useEffect } from "react";
import { getDataFromStorage } from "../../../../helpers/storage";
import userService from "../../../../services/user.service";

const CreatePostScreen = () => {
    const route = useRoute();
    const image = route.params.image;
    const [caption, setCaption] = useState("");
    const [user, setUser] = useState({});
    const navigation = useNavigation();
    const handleCreatePost = async () => {
        const data = {
            description: caption,
            images: [image],
            longitude: 0,
            latitude: 0,
        };

        const res = await feedService.createPost(data);
    };

    useEffect(() => {
        const getUserData = async () => {
            try {
                const data = await userService.getMyInfo();

                setUser(data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUserData();
    }, []);

    return (
        <View className="px-6 bg-white flex-1 pt-3">
            <View className="flex-row justify-between">
                <View className="flex-row mb-5 gap-x-4">
                    <TouchableOpacity
                        className="flex-row items-center justify-center"
                        onPress={() => navigation.navigate("take-photo")}
                    >
                        <Delete />
                    </TouchableOpacity>
                    <Text className="text-neutral-900 text-base leading-[18px]">
                        Create a post
                    </Text>
                </View>

                <TouchableOpacity onPress={handleCreatePost}>
                    <Text
                        className=" text-2xl  font-semibold font-['Montserrat'] leading-7"
                        style={{
                            color: color.primary,
                        }}
                    >
                        POST
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View
                    className="flex-column justify-between"
                    style={{ minHeight: 800 }}
                >
                    <View>
                        <UserInfo
                            disableAdd={true}
                            userName={user.name}
                            textDark={true}
                            postTime={dayjs(new Date().getTime()).format(
                                "DD-MM-YYYY HH:mm"
                            )}
                            userImage={{ uri: user.avatar }}
                        />
                        <TextInput
                            value={caption}
                            className="flex-wrap w-[344px] text-neutral-600 text-xs font-normal font-['Montserrat'] leading-[14px] mb-3 mt-4"
                            placeholder="Add a description..."
                            onChangeText={setCaption}
                        />
                        <View className="w-full h-[400]">
                            <Image
                                source={image.uri}
                                className="w-full h-[400]"
                            />
                        </View>
                    </View>

                    <Accordion />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CreatePostScreen;
