import { View, Text } from "react-native";
import React from "react";
import { ProfileLayout } from "../../../Components";
import { InputField, Button } from "../../../Components/form";
import { MaterialIcons } from "@expo/vector-icons";
const change_password = () => {
    return (
        <ProfileLayout title={"Change Password"}>
            <View className="flex-1 mt-[24px]">
                <InputField placeholder={"Current Password"}>
                    <MaterialIcons
                        name="lock-outline"
                        size={24}
                        className="text-grey-primary"
                        color="#7C82A1"
                    />
                </InputField>
                <InputField placeholder={"New Password"}>
                    <MaterialIcons
                        name="lock-outline"
                        size={24}
                        className="text-grey-primary"
                        color="#7C82A1"
                    />
                </InputField>
                <InputField placeholder={"Repeat Password"}>
                    <MaterialIcons
                        name="lock-outline"
                        size={24}
                        className="text-grey-primary"
                        color="#7C82A1"
                    />
                </InputField>

                <Button title={"Change Password"} />
            </View>
        </ProfileLayout>
    );
};

export default change_password;
