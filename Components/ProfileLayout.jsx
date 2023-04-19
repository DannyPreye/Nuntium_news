import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ProfileLayout = ({ title, children }) => {
    const router = useRouter();
    return (
        <SafeAreaView
            style={{
                paddingTop:
                    Platform.OS == "android" ? StatusBar.currentHeight : "",
            }}
            className="px-[20px] flex-1 bg-[#E5E5E5]"
        >
            <View className="items-center flex-row justify-between ">
                <TouchableOpacity onPress={() => router.back()}>
                    <AntDesign name="arrowleft" size={24} color="#7C82A1" />
                </TouchableOpacity>
                <Text className=" text-black-primary flex-1 capitalize text-[24px] leading-[32px] font-[600] text-center">
                    {title}
                </Text>
            </View>
            <View className="flex-1 ">{children}</View>
        </SafeAreaView>
    );
};

export default ProfileLayout;
