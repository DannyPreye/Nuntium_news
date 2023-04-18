import { View, Text, Switch } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import { FontAwesome, Feather } from "@expo/vector-icons";
import { HomeLayout, ProfileLink } from "../../../Components";

const Profile = () => {
    const name = "John Doe";
    const email = "johndoe@gmail.com";
    const [isEnabled, setIsEnabled] = React.useState(false);
    return (
        <>
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={24} color={color} />
                    ),
                }}
            />

            <HomeLayout heading={"Profile"}>
                <View className="flex-1 w-full items-start mt-[32px]">
                    <View className="flex-row space-x-[24px] items-center">
                        <View className="w-[72px] items-center justify-center h-[72px] rounded-full bg-[#C4C4C4]">
                            <FontAwesome
                                name="user-o"
                                size={24}
                                color="black"
                            />
                        </View>
                        <View>
                            <Text className="font-[600] text-[16px] text-black-primary">
                                {name}
                            </Text>
                            <Text className="text-[14px] font-[400] text-grey-primary">
                                {email}
                            </Text>
                        </View>
                    </View>
                    <View className="mt-[32] items-center w-full  ">
                        <ProfileLink title={"Notification"}>
                            <Switch
                                trackColor={{ true: "#475AD7" }}
                                thumbColor={"#fff"}
                                onValueChange={() =>
                                    setIsEnabled((prev) => !prev)
                                }
                                value={isEnabled}
                            />
                        </ProfileLink>
                        <ProfileLink title={"Language"}>
                            <Feather
                                name="chevron-right"
                                size={24}
                                color="black"
                            />
                        </ProfileLink>
                    </View>
                </View>
            </HomeLayout>
        </>
    );
};

export default Profile;
