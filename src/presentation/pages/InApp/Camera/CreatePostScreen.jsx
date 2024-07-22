import { useNavigation, useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Delete } from "../../../../assets/img/Button";
import { UserContext } from "../../../../context/user";
import feedService from "../../../../services/feed.service";
import Accordion from "../../../components/Accordion";
import ContainerComponent from "../../../components/ContainerComponent";
import UserInfo from "../../../components/UserInfo";
const { width } = Dimensions.get("screen");
const CreatePostScreen = () => {
    const route = useRoute();
    const images = route.params.images;

    const [caption, setCaption] = useState("");
    const { user } = React.useContext(UserContext);
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

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ContainerComponent>
                <View className="flex-row justify-between py-5">
                    <View className="flex-row gap-x-4 items-center">
                        <TouchableOpacity
                            className="flex-row items-center justify-center"
                            onPress={() => navigation.goBack("take-photo")}
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
                    <View className="flex-column justify-between flex-1">
                        <View>
                            <UserInfo
                                disableAdd={true}
                                userName={user.name}
                                textDark={true}
                                postTime={dayjs(new Date().getTime()).format(
                                    "DD-MM-YYYY HH:mm"
                                )}
                                userImage={user.avatar}
                            />
                            <TextInput
                                multiline
                                value={caption}
                                className="flex-wrap w-[344px] text-neutral-600 text-xs font-normal font-['Montserrat'] leading-[14px] mb-3 mt-4"
                                placeholder="Add a description..."
                                onChangeText={setCaption}
                            />
                            <View className=" rounded-[15px] shadow overflow-hidden">
                                <Image
                                    source={images[0].uri}
                                    style={{
                                        height: width,
                                        width: "100%",
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Accordion images={images} />
            </ContainerComponent>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default CreatePostScreen;
