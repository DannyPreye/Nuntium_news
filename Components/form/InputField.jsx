import { View, Text, TextInput } from "react-native";
import { useState } from "react";

const InputField = ({
    children,
    placeholder,
    onChangeText,
    password,
    value,
    textClassName,
    containerClass,
}) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View
            className={`w-full max-w-[336px] mx-auto h-[56px] mt-4 px-[18px] items-center rounded-[10px] 
                     space-x-4 flex-row bg-grey-secondary ${
                         isFocus
                             ? "border-[2px] border-purple-primary bg-white"
                             : "bg-grey-secondary border-none"
                     }  ${containerClass}`}
        >
            {children}
            <TextInput
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                    setIsFocus(false);
                }}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={password ? true : false}
                placeholder={placeholder}
                className={`text-grey-primary flex-1 text-[16px] font-[500] ${textClassName}}`}
            />
        </View>
    );
};

export default InputField;
