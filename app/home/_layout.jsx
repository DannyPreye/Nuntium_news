import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarLabel: "",
            }}
        />
    );
};

export default _layout;