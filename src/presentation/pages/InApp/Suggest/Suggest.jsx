import React from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
    Image as rnImage,
} from "react-native";
import { Image } from "expo-image";

import InputComponent from "../../../components/InputComponent";
import { MasonryFlashList } from "@shopify/flash-list";
import SvgIcon from "../../../components/SvgIcon";

import Filter from "../../../../assets/img/Button/filter.svg";
import KinhLup from "../../../../assets/img/Button/kinhlup.svg";
const Suggest = () => {
    const imgs = [
        {
            uri: "https://vuanem.com/blog/wp-content/uploads/2023/07/phan-loai-tai-nguyen-thien-nhien.jpg",
        },
        {
            uri: "https://vuanem.com/blog/wp-content/uploads/2023/07/phan-loai-tai-nguyen-thien-nhien.jpg",
        },
        {
            uri: "https://vuanem.com/blog/wp-content/uploads/2023/07/phan-loai-tai-nguyen-thien-nhien.jpg",
        },
        {
            uri: "https://vuanem.com/blog/wp-content/uploads/2023/07/phan-loai-tai-nguyen-thien-nhien.jpg",
        },
        {
            uri: "https://vuanem.com/blog/wp-content/uploads/2023/07/phan-loai-tai-nguyen-thien-nhien.jpg",
        },
        {
            uri: "https://vuanem.com/blog/wp-content/uploads/2023/07/phan-loai-tai-nguyen-thien-nhien.jpg",
        },
        {
            uri: "https://vuanem.com/blog/wp-content/uploads/2023/07/phan-loai-tai-nguyen-thien-nhien.jpg",
        },
        {
            uri: "https://vuanem.com/blog/wp-content/uploads/2023/07/phan-loai-tai-nguyen-thien-nhien.jpg",
        },
    ];
    return (
        <View className="px-6 bg-white flex-1">
            <InputComponent
                affix={<SvgIcon Icon={KinhLup} width={24} height={24} />}
                suffix={<SvgIcon Icon={Filter} width={24} height={24} />}
                placeholder="Search here..."
            />
            <ScrollView className="flex-1">
                <MasonryFlashList
                    data={imgs}
                    numColumns={2}
                    estimatedItemSize={1000}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                className="rounded-[15px]"
                                style={{
                                    width: [0, 3, 4, 7].some(
                                        (number) => number === index
                                    )
                                        ? "48%"
                                        : "23%",
                                }}
                            >
                                <Image
                                    style={{
                                        width: "100%",

                                        height: 200,
                                    }}
                                    placeholder={"loading..."}
                                    source={item}
                                    contentFit="cover"
                                    transition={1000}
                                />
                            </TouchableOpacity>
                        );
                    }}
                />
            </ScrollView>
        </View>
    );
};

export default Suggest;
