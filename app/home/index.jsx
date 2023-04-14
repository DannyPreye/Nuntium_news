import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
    AuthLayout,
    HomeLayout,
    SearchInput,
    Category,
    NewsCard,
    RecommendedCard,
} from "../../Components";
import { categories } from "../../lib/constants";
import useFetch from "../../hooks/useFetch";

const index = () => {
    const [selectedCategory, setSelectedCategory] = useState("Random");
    const { data, isloading, error } = useFetch(
        `https://newsdata.io/api/1/news?apikey=pub_113647491cfdf2ef088ef76e6632e05faf7f5&country=ng&category=${
            selectedCategory == "Random" ? "top" : selectedCategory
        }`,
        selectedCategory
    );

    return (
        <>
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={24} color={color} />
                    ),
                    tabBarLabel: "",
                }}
            />

            <HomeLayout
                heading={"Browse"}
                subheading={"Discover things of this world"}
            >
                <View className="flex-1 w-full mt-[32px] ">
                    <SearchInput />

                    <View className="mt-[24]">
                        <FlatList
                            data={categories}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ columnGap: 16 }}
                            renderItem={({ item }) => (
                                <Category
                                    selectedCategory={selectedCategory}
                                    handlePress={() =>
                                        setSelectedCategory(item)
                                    }
                                    title={item}
                                />
                            )}
                        />
                    </View>

                    <View className="mt-[24px]">
                        {isloading ? (
                            <View className="w-full items-center justify-center">
                                <ActivityIndicator
                                    size={"large"}
                                    color={"#1E90FF"}
                                />
                            </View>
                        ) : error ? (
                            <View className="w-full items-center justify-center">
                                <Text className="font-[600] text-[#a51515] ">
                                    Sorry there was an error fetching the news
                                </Text>
                            </View>
                        ) : (
                            <View className="w-full ">
                                <FlatList
                                    data={data?.results}
                                    renderItem={({ item }) => (
                                        <NewsCard news={item} />
                                    )}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ columnGap: 16 }}
                                />
                            </View>
                        )}
                    </View>
                    <View className="mt-[24]">
                        <View className="flex-row items-center justify-between py-2">
                            <Text className="font-[600] text-[20px] leading-[24px] text-black-primary">
                                Recommended for you
                            </Text>
                            <TouchableOpacity>
                                <Text className="font-[500] text-[14px] leading-[24px] text-grey-primary">
                                    See All
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <RecommendedCard data={data} />
                    </View>
                </View>
            </HomeLayout>
        </>
    );
};

export default index;
