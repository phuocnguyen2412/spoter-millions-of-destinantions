import { useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { Bookmark2 } from "iconsax-react-native";
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import color from "../../../contants/color";
import {
    Add,
    Checked,
    Save,
    SaveFullFill,
} from "../../../../assets/img/Button";
const _savedList = [];
const _unSavedList = [
    {
        image: "https://statics.vinpearl.com/life-in-vietnam-02_1687414832.jpg",
        title: "Collection",
        description: "Private",
    },
    {
        image: "https://statics.vinpearl.com/life-in-vietnam-02_1687414832.jpg",
        title: "City in VietNam 😎",
        description: "Coastal cities in Vietnam with beaches and resorts",
    },
    {
        image: "https://lasinfoniavietnam.com/wp-content/uploads/2023/06/Terraco-view-1.jpg",
        title: "Bar/Pub/Club",
        description: "Hidden clubs/bars",
    },
    {
        image: "https://static.vinwonders.com/production/central-vietnam-food-banner.jpg",
        title: "Foods 🍔",
        description: "Spicy and flavorful food for dinner",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTyezwnmCf7_vfRMzGBj4fy8BjusmwzKjzg&s",
        title: "Hotels 🛏",
        description: "Hotels near the city centers",
    },
];
const SaveScreen = () => {
    const [saveds, setSaveds] = React.useState(_savedList);
    const { postImage } = useRoute().params;

    const [_unsaveds, setUnsaveds] = React.useState(_unSavedList);
    const handleSave = (record) => {};
    const handleUnsave = (record) => {};
    return (
        <SafeAreaView className="flex-1 bg-neutral-50 ">
            <ScrollView>
                <View className="bg-neutral-200 rounded-tl-[25px] rounded-tr-[25px] px-6">
                    <SavedComponent image={postImage} />
                </View>
                <View className="bg-neutral-50 px-6 flex-1">
                    <View className="flex-row justify-between items-center mb-6 mt-[25]">
                        <Text className="text-neutral-700 text-xl font-semibold font-['Montserrat']">
                            Collections
                        </Text>
                        <TouchableOpacity>
                            <Text className="text-sky-900 text-sm font-normal font-['Montserrat']">
                                New collection
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {_unsaveds.map((item) => (
                        <UnsavedComponent
                            key={item.title}
                            data={item}
                            onPress={() => handleSave(item)}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const SavedComponent = ({ image }) => {
    return (
        <View className="flex-row items-center justify-between my-5">
            <View className="flex-row items-center">
                <View className="shadow">
                    <Image
                        source={image}
                        className="w-20 h-20 rounded-[15px] mr-[25]"
                    />
                </View>

                <View>
                    <Text className=" text-neutral-700 text-2xl font-semibold font-['Montserrat']">
                        Saved to
                    </Text>
                    <Text className="text-neutral-500 text-sm font-normal font-['Montserrat']">
                        Your private collection
                    </Text>
                </View>
            </View>
            <SaveFullFill />
        </View>
    );
};
const UnsavedComponent = ({ data, onPress }) => {
    const { title, description, image } = data;
    const [isSaved, setIsSaved] = React.useState(false);
    return (
        <View className="flex-row items-center justify-between mb-[20]">
            <View className="flex-row items-center">
                <View className="shadow">
                    <Image
                        source={image}
                        className="w-20 h-20 rounded-[15px]  mr-[25]"
                    />
                </View>

                <View className="w-2/3">
                    <Text className="text-neutral-700 text-sm font-semibold font-['Montserrat'] mb-[5]">
                        {title}
                    </Text>
                    <Text className="text-neutral-500 text-xs font-normal font-['Montserrat'] ">
                        {description}
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => setIsSaved(!isSaved)}>
                {isSaved ? <Add /> : <Checked />}
            </TouchableOpacity>
        </View>
    );
};
export default SaveScreen;
