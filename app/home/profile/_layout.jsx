import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ProfileLayout } from "../../../Components";

const _layout = () => {
    return (
        <>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </>
    );
};

export default _layout;
