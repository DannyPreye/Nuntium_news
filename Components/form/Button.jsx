import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ handlePress, title, containerClassName, textClassName }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            className={`mt-[44px] mx-auto bg-primary h-[56px] w-full max-w-[336px] space-x-[52px] px-[16px]   rounded-[12px] items-center justify-center ${containerClassName}`}
        >
            <Text
                className={`text-[16px] font-[600] text-center text-white ${textClassName}`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
