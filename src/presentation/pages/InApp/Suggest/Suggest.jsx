import React from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { Image } from "expo-image";

import InputComponent from "../../../components/InputComponent";
import MasonryList from "@react-native-seoul/masonry-list";

import Filter from "../../../../assets/img/Button/filter.svg";
import KinhLup from "../../../../assets/img/Button/kinhlup.svg";
import posts from "../../../../data/posts";

const Suggest = () => {
    const _width = Dimensions.get("screen").width;
    return (
        <View className="px-6 bg-white flex-1">
            <InputComponent
                affix={<KinhLup />}
                suffix={<Filter />}
                placeholder="Search here..."
            />
            <View className="flex-1">
                <MasonryList
                    data={posts}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, i }) => {
                        const lastNumber =
                            i.toString()[i.toString().length - 1];

                        if (lastNumber == 3 || lastNumber == 6) return null;
                        if (lastNumber == 1 || lastNumber == 4)
                            return (
                                <View className="flex-row">
                                    <TouchableOpacity className="rounded-[30] p-2 w-1/2 overflow-hidden">
                                        <Image
                                            style={{
                                                width: "100%",
                                                height: _width / 2,
                                            }}
                                            placeholder={"loading..."}
                                            source={item.postImage}
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity className="rounded-[30] p-2 w-1/2 overflow-hidden">
                                        <Image
                                            style={{
                                                width: "100%",
                                                height: _width / 2,
                                            }}
                                            placeholder={"loading..."}
                                            source={posts[i + 2].postImage}
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    </TouchableOpacity>
                                </View>
                            );

                        return (
                            <TouchableOpacity className="rounded-[30] p-2 w-full overflow-hidden">
                                <Image
                                    style={{
                                        width: "100%",
                                        height: _width / 2,
                                    }}
                                    placeholder={"loading..."}
                                    source={item.postImage}
                                    contentFit="cover"
                                    transition={1000}
                                />
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </View>
    );
};

export default Suggest;
