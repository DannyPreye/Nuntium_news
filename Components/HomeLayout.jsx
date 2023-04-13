import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";

const HomeLayout = ({ children, heading, subheading }) => {
    return (
        <SafeAreaView
            style={{
                marginTop:
                    Platform.OS == "android" ? StatusBar.currentHeight : 0,
            }}
            className="px-5  flex-1"
        >
            <>
                <View className="mt-[24]">
                    <Text className="text-[24px] font-[600] leading-[32px] text-black-primary">
                        {heading}
                    </Text>
                    <Text className="font-[400] mt-[8] text-[16px] leading-[24px] text-grey-primary">
                        {subheading}
                    </Text>
                </View>
                <View className="flex-1 items-center ">{children}</View>
            </>
        </SafeAreaView>
    );
};

export default HomeLayout;
