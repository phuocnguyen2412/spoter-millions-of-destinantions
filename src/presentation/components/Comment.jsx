import React from "react";
import { Text } from "react-native";
import { Image, StyleSheet, View } from "react-native";

const Comment = ({ commentInfo }) => {
    const { userImage, comment, time } = commentInfo;
    return (
        <View className="flex-row item-start justify-center mb-3">
            <Image
                source={{ uri: userImage }}
                style={{
                    height: 40,
                    width: 40,
                    marginRight: 12,
                    borderRadius: 40,
                }}
                resizeMode="cover"
            />
            <View className="flex-1">
                <Text className="text-black text-xs font-normal ">
                    {comment}
                </Text>
                <View className="flex-row">
                    <Text className="text-neutral-500 text-xs font-normal mr-6">
                        {time}
                    </Text>
                    <Text className="text-neutral-500 text-xs font-normal">
                        Reply
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Comment;
