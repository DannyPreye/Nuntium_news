import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    ToastAndroid,
} from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { bookMarkContext } from "./Context/BookMarkContext";

const NewsCard = ({ news, handlePress }) => {
    const { saveBookMark } = useContext(bookMarkContext);
    return (
        <TouchableOpacity className="w-[256px] h-[256px] rounded-[12px] overflow-hidden">
            <ImageBackground
                source={{
                    uri: news?.image_url
                        ? news?.image_url
                        : "https://images.hindustantimes.com/img/2021/08/08/550x309/Breaking-News-Live-Blog-pic_1627257432413_1628466730335.jpg",
                }}
                className="flex-1"
            >
                <LinearGradient
                    className="flex-1 p-[24px] justify-between "
                    colors={[
                        "rgba(34, 36, 47, 0) ",
                        "rgba(34, 36, 47, 0.48)",
                        "rgba(34, 36, 47, 0.16)",
                        "rgba(34, 36, 47, 0.16)",
                    ]}
                >
                    <TouchableOpacity
                        onPress={() => saveBookMark(news)}
                        className="items-end"
                    >
                        <FontAwesome
                            name="bookmark-o"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                    <View>
                        <Text className="capitalize text-[16px] font-[400] text-grey-secondary">
                            {news?.category[0]}
                        </Text>
                        <Text className="text-grey-secondary font-[700] mt-[8px] text-[16px]">
                            {news?.title}
                        </Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default NewsCard;
