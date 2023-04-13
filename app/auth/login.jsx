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
    Image,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { InputField, Button } from "../../Components/form";
import LastPrompt from "../../Components/form/LastPrompt";

const login = () => {
    const router = useRouter();
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
                <View className="mt-[32] flex-1 items-center ">
                    <Formik initialValues={{ email: "", password: "" }}>
                        {(props) => (
                            <View className="w-full  items-center">
                                <InputField
                                    placeholder={"Email"}
                                    onChangeText={props.handleChange("email")}
                                    value={props.values.email}
                                >
                                    <MaterialIcons
                                        name="mail-outline"
                                        size={24}
                                        className="text-grey-primary"
                                        color="#7C82A1"
                                    />
                                </InputField>
                                <InputField
                                    placeholder={"Password"}
                                    onChangeText={props.handleChange(
                                        "password"
                                    )}
                                    password={true}
                                    value={props.values.password}
                                >
                                    <MaterialIcons
                                        name="lock-outline"
                                        size={24}
                                        className="text-grey-primary"
                                        color="#7C82A1"
                                    />
                                </InputField>
                                <TouchableOpacity
                                    onPress={() =>
                                        router.push("/auth/forgotPassword")
                                    }
                                    className="items-end w-full mt-[16px]"
                                >
                                    <Text className="text-[16px] font-[500] text-grey-primary">
                                        Forgot Password?
                                    </Text>
                                </TouchableOpacity>
                                <Button
                                    handlePress={props.handleSubmit}
                                    title={"Sign in"}
                                    containerClassName={"mt-[24px]"}
                                />
                                <View className="flex-row items-center justify-center mt-[24]">
                                    <Text className="font-[600] text-grey-primary text-[16px]">
                                        Or
                                    </Text>
                                </View>
                                <View className="w-full gap-[16px] mt-[48]">
                                    <TouchableOpacity className=" w-full  max-w-[336px] space-x-[52px] px-[16px]  h-[56px] bg-grey-secondary  rounded-[12px] items-center flex-row">
                                        <Image
                                            source={require("../../assets/home/google-logo.png")}
                                        />
                                        <Text className="font-[600] text-[16px] text-grey-primary ">
                                            Sign in with Google
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="w-full max-w-[336px] space-x-[52px] px-[16px]  h-[56px] bg-grey-secondary  rounded-[12px] items-center flex-row">
                                        <Image
                                            source={require("../../assets/home/facebook-logo.png")}
                                        />
                                        <Text className="font-[600] text-[16px] text-grey-primary ">
                                            Sign in with Facebook
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <LastPrompt
                                    handlePress={() =>
                                        router.push("/auth/register")
                                    }
                                    containerClassName={"mt-[45px]"}
                                    question={"Don't have an account?"}
                                    answer={"Sign Up"}
                                />
                            </View>
                        )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default login;
