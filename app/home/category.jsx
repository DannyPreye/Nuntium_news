import { View, Text } from "react-native";
import React, { useState } from "react";
import { Tabs } from "expo-router";
import { SimpleLineIcons } from "@expo/vector-icons";
import { HomeLayout } from "../../Components";
import { topics } from "../../lib/constants";
import Topic from "../../Components/Topic";

const category = () => {
    const [selected, setSelected] = useState([]);

    return (
        <>
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name="grid" size={24} color={color} />
                    ),
                }}
            />
            <HomeLayout
                heading={"Categories"}
                subheading={"Thousands of articles in each category"}
            >
                <View className="flex-1 mt-[32] flex-row flex-wrap  items-center justify-evenly">
                    {topics.map((topic, id) => (
                        <Topic
                            title={topic.title}
                            selected={selected}
                            key={`cate_${id}`}
                            handlePress={() => {
                                if (selected.includes(topic.title)) {
                                    setSelected(
                                        selected.filter(
                                            (item) => item !== topic.title
                                        )
                                    );
                                } else {
                                    setSelected([...selected, topic.title]);
                                }
                            }}
                        />
                    ))}
                </View>
            </HomeLayout>
        </>
    );
};

export default category;
