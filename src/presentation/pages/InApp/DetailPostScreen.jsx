import { Ionicons } from "@expo/vector-icons";
import {
    useIsFocused,
    useNavigation
} from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import UserInfo from "../../components/UserInfo";

import {
    Back,
    Comment,
    GifTextBox,
    Navigation,
    Save,
    Send,
    SmileTextBox,
    StickerTextBox
} from "../../../assets/img/Button";

import { Image } from "expo-image";
import imageButton from "../../../assets/img/button-img/index";
import _comments from "../../../data/comments";
import CommentComponent from "../../components/Comment";
const DetailPostScreen = ({ route }) => {
    const navigation = useNavigation();
    // Check if the screen is focused
    const [commentText, setCommentText] = useState("");
    const [liked, setLiked] = useState(false);
    // Use the focus state to hide the tab bar
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            navigation.getParent().setOptions({
                tabBarStyle: { display: "none" },
            });
        } else {
            navigation.getParent().setOptions({
                tabBarStyle: { display: "flex" },
            });
        }
    }, [isFocused]);

    const {
        userImage,
        userName,
        postTime,
        postImage,
        likes,
        comments,
        caption,
    } = route.params.post;

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="px-6">
                <View className="flex-row justify-between items-center mb-2">
                    <View className="flex-row items-center flex-1">
                        <TouchableOpacity onPress={navigation.goBack}>
                            <Back />
                        </TouchableOpacity>

                        <UserInfo
                            style={{ marginLeft: 16 }}
                            textDark={true}
                            userImage={userImage}
                            userName={userName}
                            postTime={postTime}
                        />
                    </View>
                    <View>
                        <Ionicons
                            name="ellipsis-horizontal"
                            size={24}
                            color="black"
                        />
                    </View>
                </View>

                <Text className="text-black text-sm font-normal font-['Montserrat'] leading-none mb-3">
                    {caption}
                </Text>
                <Image
                    source={{ uri: postImage }}
                    style={styles.image}
                    contentFit="cover"
                />
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#D4D4D4",
                        marginTop: 12,
                        marginBottom: 12,
                    }}
                ></View>
                <View className="mb-5 flex-row justify-between">
                    <View className="flex-row gap-x-4 items-center">
                        <View>
                            <TouchableOpacity
                                onPress={toggleLike}
                                className="flex-row items-center"
                            >
                                <Ionicons
                                    name={liked ? "heart" : "heart-outline"}
                                    size={26}
                                    color={liked ? "red" : "black"}
                                />
                                <Text
                                    style={{ color: liked ? "red" : "black" }}
                                    className="ml-2 text-red-500 text-base font-medium font-['Montserrat'] "
                                >
                                    {likes}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row items-center">
                            <Comment />
                            <Text className="ml-2 text-base font-medium font-['Montserrat']">
                                {comments}
                            </Text>
                        </View>
                    </View>
                    <View className="flex-row items-center gap-x-4">
                        <View>
                            <Navigation />
                        </View>
                        <View>
                            <Save />
                        </View>
                    </View>
                </View>
                <View>
                    {_comments.map((commentInfo, index) => (
                        <CommentComponent
                            key={index}
                            commentInfo={commentInfo}
                        />
                    ))}
                </View>
            </ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="px-4 py-3 bg-white"
            >
                <View className="bg-[#E5E5E5] p-4 rounded-3xl">
                    <TextInput
                        multiline
                        className="w-full mb-[19] text-neutral-600 text-xs font-normal font-['Montserrat'] leading-[14px] tracking-tight"
                        placeholder="Write a comment..."
                        value={commentText}
                        onChangeText={setCommentText}
                        placeholderTextColor={"#525252"}
                    />
                    <View className="flex-row justify-between items-center">
                        <View style={styles.iconContainer} className="gap-2">
                            <TouchableOpacity>
                                <SmileTextBox />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={imageButton.camera}
                                    className="w-[24] h-[24]"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <GifTextBox />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <StickerTextBox />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Send />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        borderRadius: 18,
        width: "100%",
        aspectRatio: 1,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        marginBottom: 16,
    },
    subActions: {
        flexDirection: "row",
    },
    commentSection: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 8,
    },
    comments: {
        marginLeft: 4,
    },
    commentInputSection: {
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#d4d4d4",
        padding: 8,
        backgroundColor: "white",
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 8,
    },
    commentInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#d4d4d4",
        borderRadius: 25,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: "#f0f0f0",
    },
});

export default DetailPostScreen;
