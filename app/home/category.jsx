import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { SimpleLineIcons } from "@expo/vector-icons";

const category = () => {
    return (
        <>
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name="grid" size={24} color={color} />
                    ),
                }}
            />
        </>
    );
};

export default category;
