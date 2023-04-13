import { TouchableOpacity, Text } from "react-native";
import { useState } from "react";

const Topic = ({ title, selected, handlePress }) => {
    const isSelected = selected.includes(title);
    return (
        <TouchableOpacity
            onPress={handlePress}
            className={`w-[150px] mt-[16px] h-[72px] rounded-[12px] ${
                isSelected ? "bg-primary" : "bg-grey-secondary"
            }  items-center justify-center`}
        >
            <Text
                className={`text-[16px] leading-[24px] font-[600] text-center ${
                    isSelected ? "text-white" : "text-grey-primary "
                }`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Topic;
