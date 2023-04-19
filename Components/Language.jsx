import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Language = ({ title, isActive, handlePress }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            className="w-full h-[56px] mt-[16px]"
        >
            <View
                className={`w-full items-center h-full mt-[16px] rounded-[12px] px-[24px] flex-row justify-between items-center ${
                    isActive === title ? "bg-blue-600" : "bg-grey-secondary"
                }`}
            >
                <Text
                    className={`font-[600] text-[16px] leading-[24px] ${
                        isActive == title ? "text-white" : "text-grey-primary"
                    }`}
                >
                    {title}
                </Text>
                {isActive === title && (
                    <Ionicons name="ios-checkmark" size={24} color="white" />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default Language;
