import {
    View,
    Text,
    StatusBar,
    Platform,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import React from "react";

const AuthLayout = ({ children, heading, writeUp }) => {
    return (
        <SafeAreaView
            style={{
                marginTop:
                    Platform.OS == "android" ? StatusBar.currentHeight : 0,
            }}
            className="flex-1 items-center "
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <>
                    <View className="mt-[24]">
                        <Text className="text-[24px] font-[600] leading-[32px] text-black-primary">
                            {heading}
                        </Text>
                        <Text className="font-[400] mt-[8] text-[16px] leading-[24px] text-grey-primary">
                            {writeUp}
                        </Text>
                    </View>
                    <View className="flex-1 items-center">{children}</View>
                </>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default AuthLayout;
