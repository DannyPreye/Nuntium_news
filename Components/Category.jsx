import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Category = ({ title, selectedCategory, handlePress }) => {
    console.log(selectedCategory);
    return (
        <TouchableOpacity
            onPress={handlePress}
            className={`w-[81px] h-[32px] rounded-[16px] items-center justify-center ${
                selectedCategory == title
                    ? "bg-purple-primary"
                    : " bg-grey-secondary"
            }`}
        >
            <Text
                className={`text-[12px] font-[600] ${
                    selectedCategory == title
                        ? "text-white"
                        : "text-grey-primary"
                }`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Category;
