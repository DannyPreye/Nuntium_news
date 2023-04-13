import { View, Text } from "react-native";
import React from "react";
import { AuthLayout } from "../../Components";
import { Formik } from "formik";
import LastPrompt from "../../Components/form/LastPrompt";
import { useRouter } from "expo-router";
import { InputField, Button } from "../../Components/form";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const register = () => {
    const router = useRouter();
    return (
        <AuthLayout
            heading={"Welcome to Nuntium 👋"}
            writeUp={
                "Hello, I guess you are new around here. You can start using the application after sign up."
            }
        >
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    repeatPassword: "",
                }}
                onSubmit={() => {
                    router.push("/auth/selectFavorite");
                }}
            >
                {(props) => (
                    <View className="flex-1 justify-between pb-6 mt-[32] ">
                        <View className="w-full">
                            <InputField placeholder={"Username"}>
                                <Feather
                                    name="user"
                                    size={24}
                                    color="#7C82A1"
                                />
                            </InputField>
                            <InputField placeholder={"Email"}>
                                <MaterialIcons
                                    name="mail-outline"
                                    size={24}
                                    className="text-grey-primary"
                                    color="#7C82A1"
                                />
                            </InputField>
                            <InputField placeholder={"Password"}>
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

                            <View>
                                <Button
                                    title={"Sign Up"}
                                    handlePress={props.handleSubmit}
                                    containerClassName={"mt-[16px]"}
                                />
                            </View>
                        </View>

                        <LastPrompt
                            handlePress={() => router.push("/auth/login")}
                            question={"Already have an account?"}
                            answer={"Sign in"}
                        />
                    </View>
                )}
            </Formik>
        </AuthLayout>
    );
};

export default register;
