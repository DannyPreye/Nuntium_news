import {
    View,
    Text,
    StatusBar,
    SafeAreaView,
    Platform,
    FlatList,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { homeImages } from "../lib/constants";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const Indicator = ({ data, scrollX }) => {
    return (
        <View className="flex-row items-center justify-center mt-5">
            {data.map((_, i) => {
                const scale = scrollX.interpolate({
                    inputRange: [(i - 1) * width, i * width, (i + 1) * width],
                    outputRange: [0.4, 1.3, 0.4],
                    extrapolate: "clamp",
                });
                return (
                    <Animated.View
                        key={`indicator-${i}`}
                        className="h-[10px] w-[10px] rounded-[5px] bg-[#475AD7] mx-[3px]"
                        style={{ transform: [{ scale }] }}
                    />
                );
            })}
        </View>
    );
};

const index = () => {
    const scrollX = React.useRef(new Animated.Value(1)).current;
    const router = useRouter();
    return (
        <SafeAreaView
            className="flex-1 px-5  "
            style={{
                marginTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
        >
            <View className="mt-[76px]  items-center">
                <Animated.FlatList
                    horizontal
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    data={homeImages}
                    renderItem={({ item }) => (
                        <View>
                            <Image
                                source={item}
                                className={` h-[336px] rounded-[10px] "`}
                                style={{ width: width - 60 }}
                            />
                        </View>
                    )}
                    contentContainerStyle={{ columnGap: 27 }}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                />
                <Indicator scrollX={scrollX} data={homeImages} />
            </View>
            <View className="items-center gap-[24px] mt-[34] ">
                <Text className="text-[#333647] text-[24px] font-[600] text-center">
                    First to know
                </Text>
                <Text className="text-[#7C82A1] text-[16px] text-center w-[216px] ">
                    All news in one place, be the first to know last news
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => router.push("/welcome")}
                className="mt-[44px] bg-primary h-[56px] rounded-[12px] items-center justify-center "
            >
                <Text className="text-[16px] font-[600] text-center text-white">
                    Next
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default index;
