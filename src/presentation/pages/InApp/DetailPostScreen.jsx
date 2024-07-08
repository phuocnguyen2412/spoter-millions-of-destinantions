import {
    useFocusEffect,
    useIsFocused,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
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
import Comment from "../../components/Comment";
import InputComponent from "../../components/InputComponent";

const DetailPostScreen = ({ route }) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused(); // Check if the screen is focused
    const [commentText, setCommentText] = useState("");

    // Use the focus state to hide the tab bar
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
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    const commentsFake = [
        {
            userImage:
                "https://90rocks.com/wp-content/uploads/iamges/2021/06/24/251728936374.jpg",
            time: "12-12-2012",
            comment:
                "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor loremasndansjdnaksjdnjkasndasdahsuidhauisdhiuas",
        },
        {
            userImage:
                "https://90rocks.com/wp-content/uploads/iamges/2021/06/24/251728936374.jpg",
            time: "12-12-2012",
            comment: "lorem ipsum dolor sit amet, consectetur",
        },
        {
            userImage:
                "https://90rocks.com/wp-content/uploads/iamges/2021/06/24/251728936374.jpg",
            time: "12-12-2012",
            comment: "lorem ipsum dolor sit amet, consectetur",
        },
        {
            userImage:
                "https://90rocks.com/wp-content/uploads/iamges/2021/06/24/251728936374.jpg",
            time: "12-12-2012",
            comment: "lorem ipsum dolor sit amet, consectetur",
        },
    ];

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container} className="bg-white">
                    <View style={styles.header}>
                        <UserInfo
                            textDark
                            userImage={{ uri: userImage.uri }}
                            userName={userName}
                            postTime={postTime}
                        />
                        <Ionicons
                            name="ellipsis-horizontal"
                            size={24}
                            color="black"
                        />
                    </View>
                    <Text style={styles.caption}>{caption}</Text>
                    <Image
                        source={postImage}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View
                        style={{
                            height: 1,
                            width: "100%",
                            backgroundColor: "#D4D4D4",
                            marginTop: 12,
                        }}
                    ></View>
                    <View style={styles.actions}>
                        <View style={styles.subActions}>
                            <View style={styles.commentSection}>
                                <TouchableOpacity
                                    onPress={toggleLike}
                                    style={styles.commentSection}
                                >
                                    <Ionicons
                                        name={liked ? "heart" : "heart-outline"}
                                        size={28}
                                        color={liked ? "red" : "black"}
                                    />
                                    <Text style={styles.comments}>{likes}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.commentSection}>
                                <Ionicons
                                    name="chatbubble-outline"
                                    size={28}
                                    color="black"
                                />
                                <Text style={styles.comments}>{comments}</Text>
                            </View>
                        </View>
                        <View style={styles.subActions}>
                            <View style={styles.commentSection}>
                                <Ionicons
                                    name="paper-plane-outline"
                                    size={28}
                                    color="black"
                                />
                            </View>
                            <View style={styles.commentSection}>
                                <Ionicons
                                    name="bookmark-outline"
                                    size={28}
                                    color="black"
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        {commentsFake.map((commentInfo, index) => (
                            <Comment key={index} commentInfo={commentInfo} />
                        ))}
                    </View>
                </View>
            </ScrollView>
            <View className="px-4 pt-3 bg-white">
                <View className="bg-[#E5E5E5] pt-4  px-3 rounded-2xl">
                    <TextInput
                        className="w-full mb-2"
                        placeholder="Wricte a comment..."
                        value={commentText}
                        onChangeText={setCommentText}
                    />
                    <View className="flex-row justify-between">
                        <View style={styles.iconContainer} className="gap-2">
                            <Ionicons
                                name="happy-outline"
                                size={24}
                                color="gray"
                            />
                            <Ionicons
                                name="camera-outline"
                                size={24}
                                color="gray"
                            />
                            <Ionicons
                                name="image-outline"
                                size={24}
                                color="gray"
                            />
                            <Ionicons
                                name="attach-outline"
                                size={24}
                                color="gray"
                            />
                        </View>
                        <TouchableOpacity style={styles.sendButton}>
                            <Ionicons name="send" size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    caption: {
        color: "black",
        fontSize: 14,
        fontWeight: "normal",
        marginVertical: 8,
    },
    image: {
        borderRadius: 18,
        width: "100%",
        aspectRatio: 1,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        marginBottom: 8,
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
    sendButton: {
        padding: 8,
    },
});

export default DetailPostScreen;
