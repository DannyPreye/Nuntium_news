import {
    View,
    Text,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const welcome = () => {
    const router = useRouter();
    return (
        <SafeAreaView
            style={{
                marginTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
        >
            <Image
                source={require("../assets/home/hands.png")}
                className="mt-[110px]"
            />
            <View className="mt-[120] items-center px-5">
                <Text className="text-[24px] font-[600]">Nuntium</Text>
                <Text className="text-[#7C82A1] text-[16px] text-center w-[216px] mt-[24] ">
                    All news in one place, be the first to know last news
                </Text>

                <TouchableOpacity
                    onPress={() => router.push("/auth/login")}
                    className="mt-[44px] w-[336px] bg-primary h-[56px] rounded-[12px] items-center justify-center "
                >
                    <Text className="text-[16px] font-[600] text-center text-white">
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default welcome;
