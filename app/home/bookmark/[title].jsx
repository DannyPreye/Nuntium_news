import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import React, { useContext } from "react";
import { Tabs, useRouter, useSearchParams } from "expo-router";
import {
    AntDesign,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import { bookMarkContext } from "../../../Components/Context/BookMarkContext";

const index = () => {
    const router = useRouter();
    const { bookmarks, saveBookMark } = useContext(bookMarkContext);
    const { title } = useSearchParams();

    const news = bookmarks.filter(
        (item) => item?.title === title?.split("-")?.join(" ")
    )[0];

    return (
        <>
            <View className="flex-1 bg-white">
                <StatusBar animated={true} barStyle={"light-content"} />
                <View className="h-[420px] rounded-[12px]">
                    <ImageBackground
                        style={{ paddingTop: StatusBar.currentHeight }}
                        source={{
                            uri: news?.image_url
                                ? news?.image_url
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRaxlxQVfs3QBxs7QpGtixpAV47sMBqkMoA&usqp=CAU",
                        }}
                        className=" w-full h-full flex-1 "
                    >
                        <View className="px-[20px] ">
                            <View className="flex items-center justify-between flex-row">
                                <TouchableOpacity
                                    onPress={() => router.back()}
                                    className="mt-[28px]"
                                >
                                    <AntDesign
                                        name="arrowleft"
                                        size={24}
                                        color="white"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => saveBookMark(news)}
                                >
                                    <FontAwesome5
                                        name="bookmark"
                                        size={24}
                                        color="white"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View className="items-end mt-[24px]">
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        name="share-outline"
                                        size={24}
                                        color="white"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View className="items-start px-[20px] mt-[94px] space-y-[24px] ">
                            <Text className="text-center text-[12px] font-[600] text-white px-[16px] py-[8px] capitalize bg-purple-primary rounded-[16px]">
                                {news?.category[0]}
                            </Text>
                            <Text className="text-[20px] font-bold text-white">
                                {news?.title}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>

                <View className=" relative top-[-7%] h-[464px] bg-white rounded-t-[24px] flex-1  ">
                    <ScrollView className="pt-[24px] px-[20px]">
                        <View className="flex-1 bg-white rounded-t-[24px] ">
                            <Text className="font-[600] text-[16px] leading-[24px] text-black-primary">
                                Results
                            </Text>
                            <Text className="text-[16px] mt-[8px] font-[400] leading-[24px] text-grey-primary text-justify">
                                {news?.content}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export default index;
