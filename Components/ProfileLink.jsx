import { View, Text } from "react-native";
import React from "react";

const ProfileLink = ({ title, children }) => {
    return (
        <View className="w-full h-[56px] mt-[16px] bg-[#F3F4F6] items-center rounded-[12px] px-[24px] py-[16px] flex-row justify-between ">
            <Text className="font-[600] text-[16px] text-black-primary">
                {title}
            </Text>

            <View>{children ? children : null}</View>
        </View>
    );
};

export default ProfileLink;
