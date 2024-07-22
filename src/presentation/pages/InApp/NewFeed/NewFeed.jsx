import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import {
    TouchableOpacity,
    View
} from "react-native";
import { NewPostLogo } from "../../../../assets/img/Button";
import feedService from "../../../../services/feed.service";
import ContainerComponent from "../../../components/ContainerComponent";
import Loading from "../../../components/Loading";
import { PostCard } from "../../../components/PostCard";

const NewFeed = () => {
    const [loading, setLoading] = React.useState(false);
    const [posts, setPosts] = React.useState([]);
    const [page, setPage] = React.useState(2);
    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await feedService.getAllFeed(8, page);
            setPosts([...posts, ...data.data]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    React.useEffect(() => {
        fetchData();
    }, [page]);
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-white pt-14 ">
            <View className="px-6 py-1 flex-row justify-between items-center">
                <NewPostLogo />
                <View className="flex-row items-centers gap-x-4">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("notification")}
                    >
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("map")}
                    >
                        <Ionicons name="map-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            {loading ? (
                <Loading />
            ) : (
                <ContainerComponent>
                    <FlashList
                        showsVerticalScrollIndicator={false}
                        data={posts}
                        renderItem={({ item }) => <PostCard post={item} />}
                        estimatedItemSize={10}
                    />
                </ContainerComponent>
            )}
        </View>
    );
};

export default NewFeed;
