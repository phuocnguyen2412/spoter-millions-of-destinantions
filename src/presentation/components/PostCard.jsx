import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Thư viện icons
//import { getColors } from "react-native-image-colors";
import styles from "./postCartStyle";
import { useState, useEffect } from "react";
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
    return (
        <View style={[styles.card, { backgroundColor: "#ccc" }]}>
            <ImageBackground
                source={postImage}
                style={styles.postImage}
                imageStyle={styles.imageStyle}
            >
                <View style={styles.header}>
                    <Image source={userImage} style={styles.userImage} />
                    <Image
                        source={require("../../assets/img/follow-icon.png")}
                        style={styles.follow}
                    />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>{userName}</Text>
                        <Text style={styles.postTime}>{postTime}</Text>
                    </View>
                    <Ionicons
                        name="ellipsis-horizontal"
                        size={24}
                        color="white"
                    />
                </View>
                <View style={styles.actions}>
                    <View style={styles.subActions}>
                        <View style={styles.commentSection}>
                            <Ionicons
                                name="heart-outline"
                                size={20}
                                color="white"
                            />
                            <Text style={styles.comments}>{likes}</Text>
                        </View>
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
            </View>
        </View>
    );
};
