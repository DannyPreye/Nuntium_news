import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    StatusBar,
} from "react-native";
import React, { useContext } from "react";
import { Tabs, useRouter, useSearchParams } from "expo-router";
import { bookMarkContext } from "../../../Components/Context/BookMarkContext";

const index = () => {
    const { bookmarks } = useContext(bookMarkContext);
    const { title } = useSearchParams();

    const news = bookmarks.filter(
        (item) => item?.title === title?.split("-")?.join(" ")
    )[0];

    console.log(news);
    return (
        <ScrollView className="flex-1 ">
            <StatusBar animated={true} barStyle={"light-content"} />
            <View className="w-full flex-1">
                <ImageBackground
                    source={{
                        uri: news?.image_url
                            ? news?.image_url
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRaxlxQVfs3QBxs7QpGtixpAV47sMBqkMoA&usqp=CAU",
                    }}
                    className="flex-1 "
                >
                    <View></View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
};

export default index;
