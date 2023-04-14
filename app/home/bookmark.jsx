import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import { FontAwesome5 } from "@expo/vector-icons";
import { HomeLayout } from "../../Components";

const bookmark = () => {
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
            ></HomeLayout>
        </>
    );
};

export default bookmark;
