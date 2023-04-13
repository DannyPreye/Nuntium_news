import { View, Text, StatusBar, Platform, SafeAreaView } from "react-native";

import React from "react";
import { AuthLayout } from "../../Components";
import { Formik } from "formik";
import { InputField, Button } from "../../Components/form";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import LastPrompt from "../../Components/form/LastPrompt";

const forgotPassword = () => {
    const router = useRouter();
    return (
        <AuthLayout
            heading={"Forgot Password 🤔"}
            writeUp={
                "We need your email adress so we can send you the password reset code."
            }
        >
            <Formik
                onSubmit={(values) => {
                    console.log(values);
                    router.push("/auth/resetPassword");
                }}
                initialValues={{ email: "" }}
            >
                {(props) => (
                    <View className=" flex-1 justify-between pb-6 ">
                        <View className="w-full  mt-[32] ">
                            <InputField
                                value={props.values.email}
                                onChangeText={props.handleChange("email")}
                                placeholder={"Email Address"}
                            >
                                <MaterialIcons
                                    name="mail-outline"
                                    size={24}
                                    className="text-grey-primary"
                                    color="#7C82A1"
                                />
                            </InputField>
                            <View>
                                <Button
                                    title={"Next"}
                                    handlePress={props.handleSubmit}
                                />
                            </View>
                        </View>

                        <LastPrompt
                            handlePress={() => router.push("/auth/login")}
                            question={"Remeber the password?"}
                            answer={"Try Again"}
                        />
                    </View>
                )}
            </Formik>
        </AuthLayout>
    );
};

export default forgotPassword;
