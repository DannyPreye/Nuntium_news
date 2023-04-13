import { View, Text } from "react-native";
import React from "react";
import { AuthLayout } from "../../Components";
import { Formik } from "formik";
import { InputField, Button } from "../../Components/form";
import { MaterialIcons } from "@expo/vector-icons";
const resetPassword = () => {
    return (
        <AuthLayout
            heading={"Create New Password 🔒"}
            writeUp={
                "You can create a new password, please dont forget it too."
            }
        >
            <Formik
                initialValues={{
                    new_pass: "",
                    repeat_pass: "",
                }}
            >
                {(props) => (
                    <View className="flex-1 px-5 w-full">
                        <InputField
                            onChangeText={props.handleChange("new_pass")}
                            value={props.values.new_pass}
                            placeholder={"New Password"}
                        >
                            <MaterialIcons
                                name="lock-outline"
                                size={24}
                                className="text-grey-primary"
                                color="#7C82A1"
                            />
                        </InputField>
                        <InputField
                            onChangeText={props.handleChange("repeat_pass")}
                            value={props.values.repeat_pass}
                            placeholder={"Repeat New Password"}
                        >
                            <MaterialIcons
                                name="lock-outline"
                                size={24}
                                className="text-grey-primary"
                                color="#7C82A1"
                            />
                        </InputField>

                        <View>
                            <Button
                                handlePress={props.handleSubmit}
                                title={"Confirm"}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </AuthLayout>
    );
};

export default resetPassword;
