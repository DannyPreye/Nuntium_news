import { View, Text } from "react-native";
import React from "react";
import DataContextProvider from "../Components/Context/DataContext";
import BookMarkContextProvider from "../Components/Context/BookMarkContext";
import { Stack } from "expo-router";

const _layout = () => {
    return (
        <DataContextProvider>
            <BookMarkContextProvider>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                />
            </BookMarkContextProvider>
        </DataContextProvider>
    );
};

export default _layout;
