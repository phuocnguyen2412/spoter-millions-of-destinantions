import {
    View,
    Text,
    SafeAreaView,
    CheckBox,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React from "react";
import { AccordionItem } from "../../../components/AccordionItem";
import {
    Add2,
    BackLeftToRight,
    BackRightToLeft,
    DropDown,
    Pen2,
    Pin4,
    Wallet2,
} from "../../../../assets/img/Button";
import RadioGroup from "react-native-radio-buttons-group";
import Slider from "@react-native-community/slider";
import stripeService from "../../../../services/stripe.service";
import { useNavigation } from "@react-navigation/native";

const PaymentItem = () => {
    const navigation = useNavigation();
    const handlePayment = async () => {
        try {
            const res = await stripeService.CheckoutSession(2);
            console.log(res);
            navigation.navigate("stripe", { uri: res.data.checkoutUrl });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <TouchableOpacity onPress={handlePayment}>
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-x-3">
                    <Wallet2 />
                    <View>
                        <Text className="text-neutral-600 text-sm font-semibold font-['Montserrat']">
                            Make a Purchase
                        </Text>
                        <Text className="text-neutral-400 text-xs font-normal font-['Montserrat']">
                            Select a payment method
                        </Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <BackLeftToRight />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};
const PostItem = () => {
    return (
        <View className="mt-[15]">
            <View className="flex-row gap-x-5 mb-[20]">
                <Pen2 />
                <TextInput placeholder="Enter your describe" />
            </View>
            <View className="flex-row gap-x-5 mb-[20]">
                <Pin4 />
                <TextInput placeholder="Enter your describe" />
            </View>
            <View className="items-center justify-center">
                <View className="w-[305px] h-[239px] px-[102px] py-[92px] bg-neutral-200 rounded-[20px] flex-col justify-center items-center">
                    <View className="items-center justify-center">
                        <Add2 />
                        <Text className="w-full">Add pictures/video</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
const ObjectItem = () => {
    const radioSex = React.useMemo(
        () => [
            {
                id: "1", // acts as primary key, should be unique and non-empty string
                label: "All",
                value: "All",
                borderSize: 1,
                size: 16,
                borderColor: "#A3A3A3",
            },
            {
                id: "2",
                label: "Male",
                value: "Male",
                borderSize: 1,
                size: 16,
                borderColor: "#A3A3A3",
            },
            {
                id: "3",
                label: "Female",
                value: "Femail",
                borderSize: 1,
                size: 16,
                borderColor: "#A3A3A3",
            },
        ],
        []
    );
    const radioLocation = React.useMemo(
        () => [
            {
                id: "1", // acts as primary key, should be unique and non-empty string
                label: "Everyone",
                value: "Everyone",
                borderSize: 1,
                size: 16,
                borderColor: "#A3A3A3",
            },
            {
                id: "2",
                label: "Domestic",
                value: "Domestic",
                borderSize: 1,
                size: 16,
                borderColor: "#A3A3A3",
            },
            {
                id: "3",
                label: "International",
                value: "International",
                borderSize: 1,
                size: 16,
                borderColor: "#A3A3A3",
            },
        ],
        []
    );
    const radioAge = React.useMemo(
        () => [
            {
                id: "1", // acts as primary key, should be unique and non-empty string
                label: "16-22",
                value: "16-22",
                borderSize: 1,
                size: 16,
                borderColor: "#A3A3A3",
            },
            {
                id: "2",
                label: "23-30 ",
                value: "23-30 ",
                borderSize: 1,
                size: 16,
                borderColor: "#A3A3A3",
            },
            {
                id: "3",
                label: "30-45",
                value: "30-45",
                borderSize: 1,
                size: 16,
                borderColor: "#A3A3A3",
            },
            {
                id: "4",
                label: "45+",
                value: "45+",
                borderSize: 1,
                size: 16,
                borderColor: "#A3A3A3",
            },
        ],
        []
    );
    const [isSelected, setSelection] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState();
    const [valueDistance, setValueDistance] = React.useState(1);

    return (
        <View>
            <View>
                <Text>Sex</Text>
                <RadioGroup
                    containerStyle={{
                        flexDirection: "row",
                        marginVertical: 12,
                    }}
                    radioButtons={radioSex}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                />
            </View>
            <View>
                <Text>Age</Text>
                <View>
                    <RadioGroup
                        containerStyle={{
                            flexDirection: "row",
                            marginVertical: 12,
                        }}
                        radioButtons={radioAge}
                        onPress={setSelectedId}
                        selectedId={selectedId}
                    />
                </View>
            </View>
            <View>
                <Text>Location</Text>
                <RadioGroup
                    containerStyle={{
                        flexDirection: "row",
                        marginVertical: 12,
                    }}
                    radioButtons={radioLocation}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                />
            </View>
        </View>
    );
};
const Package = ({ data }) => {
    const { name, prize, description, image } = data;
    return (
        <View className="w-[305px] h-[213px] bg-[#973ca3]/10 rounded-[15px] shadow border border-[#973ca3]">
            <View>
                <Text>{name}</Text>
                <Text>{prize}</Text>
            </View>
            <Text className="mt-[33] text-[#973ca3] text-[10px] font-normal font-['Montserrat']">
                {description}    
            </Text>
        </View>
    );
};
const CreateAds = () => {
    return (
        <SafeAreaView className="flex-1 bg-neutral-50">
            <ScrollView className=" px-6">
                <Text className="text-neutral-800 text-2xl font-semibold font-['Montserrat'] mb-[25]">
                    Advertise articles
                </Text>
                <AccordionItem
                    title={"1. Object"}
                    description="Who will see your advertisement"
                    content={<ObjectItem />}
                />
                <AccordionItem
                    title={"2. Posts"}
                    description={"Describe your advertisement"}
                    content={<PostItem />}
                />
                <AccordionItem
                    title={"3. Advertising package"}
                    description={"Choose the appropriate advertising package"}
                    content={<ObjectItem />}
                />
                <AccordionItem
                    title={"4. Payment"}
                    description={"Select a payment method"}
                    content={<PaymentItem />}
                />
                <View className="flex-row justify-between items-center">
                    <Text className="text-neutral-500 text-xs font-medium font-['Montserrat'] ">
                        Final step
                    </Text>
                    <TouchableOpacity className="px-[15px] py-[5px] bg-neutral-200 rounded-[10px] justify-between items-center">
                        <Text className="text-neutral-500 text-xs font-normal font-['Montserrat']">
                            Spread
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateAds;
