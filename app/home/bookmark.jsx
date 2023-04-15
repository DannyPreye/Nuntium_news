import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { Tabs } from "expo-router";

import { FontAwesome5 } from "@expo/vector-icons";
import { ArticleCard, HomeLayout } from "../../Components";
import { bookMarkContext } from "../../Components/Context/BookMarkContext";
import { Feather } from "@expo/vector-icons";

const bookmark = () => {
    const { bookmarks } = useContext(bookMarkContext);

    return (
        <>
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="bookmark" size={24} color={color} />
                    ),
                }}
            />
            <HomeLayout
                heading={"Bookmarks"}
                subheading={"Saved articles to the library"}
            >
                {bookmarks.length > 0 ? (
                    <View className="flex-1 mt-[32] ">
                        <FlatList
                            contentContainerStyle={{ rowGap: 16 }}
                            data={bookmarks}
                            renderItem={({ item: news }) => (
                                <ArticleCard news={news} />
                            )}
                        />
                    </View>
                ) : (
                    <View className="flex-1 items-center justify-center">
                        <View className="items-center">
                            <View className="w-[72px] h-[72px] rounded-full items-center justify-center bg-[#EEF0FB] ">
                                <Feather
                                    name="book"
                                    size={24}
                                    color="#6563FF"
                                />
                            </View>
                            <Text className="text-center text-[16px] font-[500] leading-[24px] text-black-primary">
                                You haven't saved any articles yet. Start
                                reading and bookmarking them now
                            </Text>
                        </View>
                    </View>
                )}
            </HomeLayout>
        </>
    );
};

export default bookmark;
