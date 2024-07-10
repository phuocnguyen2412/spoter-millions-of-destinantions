import React from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import InputComponent from "../../../components/InputComponent";
import MasonryList from "@react-native-seoul/masonry-list";

import Filter from "../../../../assets/img/Button/filter.svg";
import KinhLup from "../../../../assets/img/Button/kinhlup.svg";

const Suggest = () => {
    const imgs = [
        {
            uri: "https://danviet.mediacdn.vn/2020/9/6/so-dem-0-1599379103719-15993791037191028454588.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20200309/ourmid/pngtree-gold-number-1-png-image_2158836.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20210407/ourlarge/pngtree-number-2-png-image_3135223.jpg",
        },
        {
            uri: "https://png.pngtree.com/element_origin_min_pic/00/00/05/135735d61f385d1.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-vector/20210121/ourlarge/pngtree-number-4-3d-plastic-shading-design-png-image_2778178.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20210407/ourlarge/pngtree-number-5-png-image_3165973.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20210303/ourlarge/pngtree-3d-number-6-luxury-png-image_3010230.jpg",
        },
        {
            uri: "https://thansohoconline.com/wp-content/uploads/2022/03/than-so-hoc-so-7-1.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20200309/ourmid/pngtree-gold-number-8-png-image_2158851.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20200309/ourlarge/pngtree-gold-number-9-png-image_2158853.jpg",
        },
        {
            uri: "https://danviet.mediacdn.vn/2020/9/6/so-dem-0-1599379103719-15993791037191028454588.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20200309/ourmid/pngtree-gold-number-1-png-image_2158836.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20210407/ourlarge/pngtree-number-2-png-image_3135223.jpg",
        },
        {
            uri: "https://png.pngtree.com/element_origin_min_pic/00/00/05/135735d61f385d1.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-vector/20210121/ourlarge/pngtree-number-4-3d-plastic-shading-design-png-image_2778178.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20210407/ourlarge/pngtree-number-5-png-image_3165973.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20210303/ourlarge/pngtree-3d-number-6-luxury-png-image_3010230.jpg",
        },
        {
            uri: "https://thansohoconline.com/wp-content/uploads/2022/03/than-so-hoc-so-7-1.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20200309/ourmid/pngtree-gold-number-8-png-image_2158851.jpg",
        },
        {
            uri: "https://png.pngtree.com/png-clipart/20200309/ourlarge/pngtree-gold-number-9-png-image_2158853.jpg",
        },
    ];

    return (
        <View className="px-6 bg-white flex-1">
            <InputComponent
                affix={<KinhLup />}
                suffix={<Filter />}
                placeholder="Search here..."
            />
            <View className="flex-1">
                <MasonryList
                    data={imgs}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, i }) => {
                        console.log(i);
                        const lastNumber =
                            i.toString()[i.toString().length - 1];
                        console.log(lastNumber);
                        if (lastNumber == 3 || lastNumber == 6) return null;
                        if (lastNumber == 1 || lastNumber == 4)
                            return (
                                <View className="flex-row">
                                    <TouchableOpacity
                                        className="rounded-[30] p-2 w-1/2 overflow-hidden"
                                        style={{}}
                                    >
                                        <Image
                                            style={{
                                                width: "100%",
                                                height: 100,
                                            }}
                                            placeholder={"loading..."}
                                            source={item}
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity className="rounded-[30] p-2 w-1/2 overflow-hidden">
                                        <Image
                                            style={{
                                                width: "100%",
                                                height: 100,
                                            }}
                                            placeholder={"loading..."}
                                            source={imgs[i + 2]}
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
            </View>
        </View>
    );
};

export default Suggest;
