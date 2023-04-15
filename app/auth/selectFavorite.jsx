import { View, ScrollView } from "react-native";
import { useState, useContext } from "react";
import { AuthLayout } from "../../Components";
import { topics } from "../../lib/constants";
import Topic from "../../Components/Topic";
import { Button } from "../../Components/form";
import { useRouter } from "expo-router";
import { bookMarkContext } from "../../Components/Context/BookMarkContext";
import { store } from "../../Components/Context/DataContext";

const selectFavorite = () => {
    const { selected, saveSelectedCategory } = useContext(store);
    const router = useRouter();
    return (
        <AuthLayout
            heading={"Select your favorite topics"}
            writeUp={
                "Select some of your favorite topics to let us suggest better news for you."
            }
        >
            <View className="flex-1 w-full">
                <View className="mt-[32px]  flex-row flex-wrap  items-center justify-evenly ">
                    {topics.map((topic, id) => (
                        <Topic
                            title={topic.title}
                            selected={selected}
                            key={`topic_${id}`}
                            handlePress={() =>
                                saveSelectedCategory(topic.title)
                            }
                        />
                    ))}
                </View>
                <View>
                    <Button
                        title={"Next"}
                        handlePress={() => router.push("/home")}
                    />
                </View>
            </View>
        </AuthLayout>
    );
};

export default selectFavorite;
