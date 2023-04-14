import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Image,
} from "react-native";

import React from "react";
import useFetch from "../hooks/useFetch";

const RecommendedCard = () => {
    const { data, isloading, error } = useFetch(
        `https://newsdata.io/api/1/news?apikey=pub_113647491cfdf2ef088ef76e6632e05faf7f5&language=en&category=world`
    );
    return (
        <ScrollView>
            <View className="mt-[24]">
                {isloading ? (
                    <View className="items-center justify-center ">
                        <ActivityIndicator size={"large"} color={"#1E90FF"} />
                    </View>
                ) : error ? (
                    <></>
                ) : (
                    <View className="gap-2">
                        {data?.results?.map((news, i) => (
                            <TouchableOpacity
                                key={`rec_${i}`}
                                className="flex-row items-center space-x-[16px]"
                            >
                                <Image
                                    source={{
                                        uri: news?.image_url
                                            ? news?.image_url
                                            : "https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc=",
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
                        ))}
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default RecommendedCard;
