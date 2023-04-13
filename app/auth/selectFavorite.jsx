import { View, ScrollView } from "react-native";
import { useState } from "react";
import { AuthLayout } from "../../Components";
import { topics } from "../../lib/constants";
import Topic from "../../Components/Topic";
import { Button } from "../../Components/form";
import { useRouter } from "expo-router";

const selectFavorite = () => {
    const [selected, setSelected] = useState([]);
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
