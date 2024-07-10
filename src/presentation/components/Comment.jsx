import React from "react";
import { Text } from "react-native";
import { Image, StyleSheet, View } from "react-native";

const CommentComponent = ({ commentInfo }) => {
    const { userImage, comment, time } = commentInfo;
    return (
        <View className="flex-row item-start justify-center mb-4">
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
                <Text className="text-black text-xs font-normal font-['Montserrat'] leading-[14px] tracking-tight mb-1">
                    {comment}
                </Text>
                <View className="flex-row gap-3">
                    <Text className="text-neutral-500 text-xs font-normal font-['Montserrat'] leading-[14px]">
                        {time}
                    </Text>
                    <Text className="text-neutral-500 text-xs font-normal font-['Montserrat'] leading-[14px]">
                        Reply
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CommentComponent;
