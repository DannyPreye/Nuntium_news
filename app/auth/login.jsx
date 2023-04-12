import {
    View,
    Text,
    SafeAreaView,
    Platform,
    StatusBar,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";

const login = () => {
    return (
        <SafeAreaView
            className="flex-1 px-5  "
            style={{
                marginTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
        >
            <Text className="text-[24px] font-[600] mt-[28px]">
                Welcome Back 👋
            </Text>
            <Text className="text-[16px] font-[400] text-grey-primary">
                I am happy to see you again. You can continue where you left off
                by logging in
            </Text>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View className="mt-[32] items-center">
                    <Formik initialValues={{ email: "", password: "" }}>
                        {(props) => (
                            <View className="gap-4">
                                <View
                                    className="w-[336px] h-[56px] px-[18px] items-center rounded-[10px] 
                     space-x-4 flex-row bg-grey-secondary "
                                >
                                    <MaterialIcons
                                        name="mail-outline"
                                        size={24}
                                        className="text-grey-primary"
                                        color="#7C82A1"
                                    />
                                    <TextInput
                                        value={props.values.email}
                                        onChangeText={props.handleChange(
                                            "email"
                                        )}
                                        placeholder="Email Address"
                                        className="text-grey-primary text-[16px] font-[500]]"
                                    />
                                </View>
                                <View
                                    className="w-[336px] h-[56px] px-[18px] items-center rounded-[10px] 
                     space-x-4 flex-row bg-grey-secondary"
                                >
                                    <MaterialIcons
                                        name="lock-outline"
                                        size={24}
                                        className="text-grey-primary"
                                        color="#7C82A1"
                                    />
                                    <TextInput
                                        onChangeText={props.handleChange(
                                            "password"
                                        )}
                                        value={props.values.password}
                                        secureTextEntry={true}
                                        placeholder="Password"
                                        className="text-grey-primary text-[16px] font-[500]]"
                                    />
                                </View>

                                <View className="items-end">
                                    <TouchableOpacity>
                                        <Text className="text-[16px] font-[500] text-grey-primary">
                                            Forgot Password?
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity className="w-[336px] h-[56px] bg-primary mt-[24] rounded-[12px] items-center justify-center">
                                    <Text className="font-[600] text-[16px] text-white">
                                        Sigin in
                                    </Text>
                                </TouchableOpacity>
                                <View className="flex-row items-center justify-center mt-[24]">
                                    <Text className="font-[600] text-grey-primary text-[16px]">
                                        Or
                                    </Text>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default login;
