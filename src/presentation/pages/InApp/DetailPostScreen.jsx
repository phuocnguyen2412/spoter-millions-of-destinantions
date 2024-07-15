import {
    useFocusEffect,
    useIsFocused,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState, useEffect } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import UserInfo from "../../components/UserInfo";
import { Ionicons } from "@expo/vector-icons";

import {
    Back,
    Comment,
    HeardInActive,
    HeartActive,
    Navigation,
    Save,
    Send,
} from "../../../assets/img/Button";

import CommentComponent, {
    Comment as CommentIcon,
} from "../../components/Comment";
import _comments from "../../../data/comments";
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
        <View className="flex-1 ">
            <ScrollView>
                <View className="bg-white p-6">
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
                        resizeMode="cover"
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
                                    className="flex-row"
                                >
                                    {liked ? (
                                        <HeartActive />
                                    ) : (
                                        <HeardInActive />
                                    )}
                                    <Text>{likes}</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="flex-row items-center">
                                <Comment />
                                <Text>{comments}</Text>
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
                </View>
            </ScrollView>
            <View className="px-4 py-3 bg-white">
                <View className="bg-[#E5E5E5] p-4 rounded-2xl">
                    <TextInput
                        className="w-full mb-[19] text-neutral-600 text-xs font-normal font-['Montserrat'] leading-[14px] tracking-tight"
                        placeholder="Write a comment..."
                        value={commentText}
                        onChangeText={setCommentText}
                        placeholderTextColor={"#525252"}
                    />
                    <View className="flex-row justify-between">
                        <View style={styles.iconContainer} className="gap-2">
                            <Icon
                                name="emoticon-outline"
                                size={24}
                                color="#888"
                                style={styles.icon}
                            />
                            <Icon
                                name="camera-outline"
                                size={24}
                                color="#888"
                                style={styles.icon}
                            />
                            <Icon
                                name="gif"
                                size={24}
                                color="#888"
                                style={styles.icon}
                            />
                            <Icon
                                name="sticker-outline"
                                size={24}
                                color="#888"
                                style={styles.icon}
                            />
                        </View>
                        <TouchableOpacity style={styles.sendButton}>
                            <Send />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
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
