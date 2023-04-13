import { View, TextInput } from "react-native";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

const SearchInput = ({ handleChange, value }) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View
            className={`flex-row items-center space-x-[20] justify-between px-[17px] w-full h-[56px] rounded-[12px] ${
                isFocus
                    ? "bg-grey-secondary border-purple-primary border-[2px]"
                    : "bg-white border-none"
            }`}
        >
            <EvilIcons name="search" size={24} color="#7C82A1" />
            <TextInput
                className="flex-1 text-grey-primary text-[16px] font-[500]"
                placeholder="Search"
                onBlur={() => setIsFocus(false)}
                onFocus={() => setIsFocus(true)}
                value={value}
                onChangeText={handleChange}
            />
        </View>
    );
};

export default SearchInput;
