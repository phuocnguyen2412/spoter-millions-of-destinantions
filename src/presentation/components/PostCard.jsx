import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Thư viện icons
//import { getColors } from "react-native-image-colors";
import styles from "./postCartStyle";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import UserInfo from "./UserInfo";
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
    const [colors, setColors] = useState({});
    const [liked, setLiked] = useState(false);

    // useEffect(() => {
    //     const getImageColors = async () => {
    //         const url = postImage.uri;
    //         getColors(url, {
    //             fallback: "#228B22",
    //             cache: true,
    //             key: url,
    //         }).then(setColors);
    //     };

    //     getImageColors();
    // }, []);
    console.log(colors);
    const navigation = useNavigation();
    const toggleLike = () => setLiked(!liked);
    return (
        <View style={[styles.card, { backgroundColor: "#ccc" }]}>
            <ImageBackground
                source={postImage}
                style={styles.postImage}
                imageStyle={styles.imageStyle}
            >
                <View style={styles.header}>
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
                <View style={styles.actions}>
                    <View style={styles.subActions}>
                        <TouchableOpacity
                            onPress={toggleLike}
                            style={styles.commentSection}
                        >
                            <Ionicons
                                name={liked ? "heart" : "heart-outline"}
                                size={20}
                                color={liked ? "red" : "white"}
                            />
                            <Text style={styles.comments}>{likes}</Text>
                        </TouchableOpacity>

                        <View style={styles.commentSection}>
                            <Ionicons
                                name="chatbubble-outline"
                                size={20}
                                color="white"
                            />

                            <Text style={styles.comments}>{comments}</Text>
                        </View>
                    </View>
                    <View style={styles.subActions}>
                        <View style={styles.commentSection}>
                            <Ionicons
                                name="paper-plane-outline"
                                size={20}
                                color="white"
                            />
                        </View>
                        <View style={styles.commentSection}>
                            <Ionicons
                                name="bookmark-outline"
                                size={20}
                                color="white"
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.caption}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("detail-post", { post })}
                >
                    <Text
                        style={[
                            {
                                fontSize: 13,
                                fontWeight: 300,
                            },
                        ]}
                    >
                        {caption}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
