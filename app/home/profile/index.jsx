import { View, Text, Switch } from "react-native";
import React from "react";
import { Stack, Tabs, useRouter } from "expo-router";

import { FontAwesome, Feather } from "@expo/vector-icons";
import { HomeLayout, ProfileLink } from "../../../Components";
import { TouchableOpacity } from "react-native";

const Profile = () => {
    const router = useRouter();
    const name = "John Doe";
    const email = "johndoe@gmail.com";
    const [isEnabled, setIsEnabled] = React.useState(false);
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
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
                        {/* Notification */}
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

                        {/* Language */}
                        <ProfileLink title={"Language"}>
                            <TouchableOpacity
                                onPress={() =>
                                    router.push("/home/profile/language")
                                }
                            >
                                <Feather
                                    name="chevron-right"
                                    size={24}
                                    color="#666c8e"
                                />
                            </TouchableOpacity>
                        </ProfileLink>
                        <ProfileLink title={"Change Password"}>
                            <TouchableOpacity
                                onPress={() =>
                                    router.push("/home/profile/change_password")
                                }
                            >
                                <Feather
                                    name="chevron-right"
                                    size={24}
                                    color="#666c8e"
                                />
                            </TouchableOpacity>
                        </ProfileLink>
                        <ProfileLink title={"Privacy"}>
                            <TouchableOpacity
                                onPress={() =>
                                    router.push("/home/profile/privacy")
                                }
                            >
                                <Feather
                                    name="chevron-right"
                                    size={24}
                                    color="#666c8e"
                                />
                            </TouchableOpacity>
                        </ProfileLink>
                        <ProfileLink title={"Terms & Conditions"}>
                            <TouchableOpacity
                                onPress={() =>
                                    router.push("/home/profile/terms")
                                }
                            >
                                <Feather
                                    name="chevron-right"
                                    size={24}
                                    color="#666c8e"
                                />
                            </TouchableOpacity>
                        </ProfileLink>
                        <ProfileLink title={"Sign Out"}>
                            <TouchableOpacity>
                                <Feather
                                    name="log-in"
                                    size={24}
                                    color="#666c8e"
                                />
                            </TouchableOpacity>
                        </ProfileLink>
                    </View>
                </View>
            </HomeLayout>
        </>
    );
};

export default Profile;
