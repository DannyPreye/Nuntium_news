import { View, Text } from "react-native";
import { useState, useEffect, createContext, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const store = createContext();

const DataContextProvider = ({ children }) => {
    const [selected, setSelected] = useState([]);

    // Save the selected category
    const saveSelectedCategory = async (value) => {
        if (selected.includes(value)) {
            setSelected(selected.filter((item) => item !== value));
            await AsyncStorage.setItem("selected", JSON.stringify(selected));
        } else {
            setSelected([...selected, value]);
            await AsyncStorage.setItem("selected", JSON.stringify(selected));
        }
    };

    // Get the selected category from async storage
    const getSelectedCategory = useCallback(() => {
        () => {
            AsyncStorage.getItem("selected").then((res) => {
                setSelected(JSON.parse(res));
            });
        };
    }, [selected]);

    useEffect(() => {
        getSelectedCategory();
    }, [selected]);

    return (
        <store.Provider value={{ selected, saveSelectedCategory }}>
            {children}
        </store.Provider>
    );
};

export default DataContextProvider;
