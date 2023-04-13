import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const LastPrompt = ({ question, answer, handlePress, containerClassName }) => {
    return (
        <View
            className={`flex-row gap-2  justify-center items-center ${containerClassName} `}
        >
            <Text className="text-[16px] font-[600] text-black-lighter">
                {question}
            </Text>
            <TouchableOpacity onPress={handlePress}>
                <Text className="text-[16px] font-[600] text-black-primary">
                    {answer}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LastPrompt;
