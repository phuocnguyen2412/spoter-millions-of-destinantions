import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React, { useCallback, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BackLeftToRight } from "../../assets/img/Button";
import Rating from "./Rating";
import UserInfo from "./UserInfo";

const BottomSheetMap = ({ info }) => {
    const { postImage, userName, postTime, userImage, caption } = info;
    // ref
    const navigation = useNavigation();
    const bottomSheetRef = useRef(null);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log("handleSheetChanges", index);
    }, []);

    // renders
    return (
        <BottomSheet
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            snapPoints={[215]}
            enablePanDownToClose
        >
            <BottomSheetView className="flex-1">
                <View className="flex-row p-5 gap-x-[11]">
                    <View className="shadow overflow-hidden">
                        <Image
                            source={postImage}
                            className="w-[140px] h-[140px] rounded-[25px]"
                            containFit="center"
                        />
                    </View>
                    <View className="flex-1 flex-col justify-between">
                        <View>
                            <UserInfo
                                textDark
                                userImage={userImage}
                                userName={userName}
                                postTime={postTime}
                                className="mb-2"
                            />
                            <Text className="text-neutral-500 text-[10px] font-normal font-['Montserrat']">
                                {caption}
                            </Text>
                        </View>
                        <Rating isDisabled={true} />
                        <TouchableOpacity
                            className="flex-row justify-end"
                            onPress={() =>
                                navigation.navigate("detail-post", {
                                    post: info,
                                })
                            }
                        >
                            <BackLeftToRight className="w-[30] h-[30] mr-4" />
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheetView>
        </BottomSheet>
    );
};

export default BottomSheetMap;
