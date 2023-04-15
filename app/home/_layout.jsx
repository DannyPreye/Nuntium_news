import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import DataProvider from "../../Components/Context/DataContext";

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarLabel: "",
                name: "",
            }}
        >
            <Tabs.Screen
                name="article/[title]"
                options={{
                    href: null,
                }}
            />
        </Tabs>
    );
};

export default _layout;
