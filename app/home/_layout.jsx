import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5, Feather } from "@expo/vector-icons";
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
                name="bookmark"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="bookmark" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default _layout;
