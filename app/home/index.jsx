import { View, Text, FlatList } from "react-native";
import { useState } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
    AuthLayout,
    HomeLayout,
    SearchInput,
    Category,
} from "../../Components";
import { categories } from "../../lib/constants";

const index = () => {
    const [selectedCategory, setSelectedCategory] = useState("Random");
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
                </View>
            </HomeLayout>
        </>
    );
};

export default index;
