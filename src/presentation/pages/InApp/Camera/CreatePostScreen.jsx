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

const CreatePostScreen = () => {
    const route = useRoute();
    const image = route.params.image;
    const [caption, setCaption] = useState("");
    const navigation = useNavigation();
    const handleCreatePost = async () => {
        const data = {
            description: caption,
            images: [image],
            longitude: 0,
            latitude: 0,
        };
        console.log(1);
        const res = await feedService.createPost(data);
        console.log(res);
    };
    return (
        <View className="px-6 bg-white flex-1 pt-3">
            <View className="flex-row justify-between">
                <View className="flex-row mb-5">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("camera")}
                    >
                        <Image
                            source={require("../../../../assets/img/Button/delete-cross.svg")}
                            className="w-4 h-4 mr-5"
                        />
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
                            userName={"Phuoc Nguyen"}
                            textDark={true}
                            postTime={dayjs(new Date().getTime()).format(
                                "DD-MM-YYYY HH:mm"
                            )}
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
