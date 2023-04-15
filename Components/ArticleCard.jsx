import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const ArticleCard = ({ news }) => {
    const router = useRouter();
    return (
        <TouchableOpacity
            onPress={() => {
                router.push(`home/article/${news?.title.split(" ").join("-")}`);
            }}
            className="flex-row items-center space-x-[16px]"
        >
            <Image
                source={{
                    uri: news?.image_url
                        ? news?.image_url
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRaxlxQVfs3QBxs7QpGtixpAV47sMBqkMoA&usqp=CAU",
                }}
                className="w-[96px] h-[96px] rounded-[12px]"
            />
            <View>
                <Text className="capitalize text-[14px] font-[400] text-grey-primary">
                    {news?.category[0]}
                </Text>
                <Text className="capitalize text-[16px] font-[600] text-black-primary w-[233px]">
                    {news?.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ArticleCard;
