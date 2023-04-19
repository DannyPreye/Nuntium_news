import { View, Text } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { ProfileLayout } from "../../../Components";
import { languages } from "../../../lib/constants";
import Language from "../../../Components/Language";

const language = () => {
    const [isActive, setIsActive] = useState(languages[0]);
    return (
        <ProfileLayout title={"Language"}>
            <View className="flex-1 items-center w-full mt-[24]">
                {languages.map((lang, id) => (
                    <Language
                        key={`lang_${id}`}
                        title={lang}
                        isActive={isActive}
                        handlePress={() => setIsActive(lang)}
                    />
                ))}
            </View>
        </ProfileLayout>
    );
};

export default language;
