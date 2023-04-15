import { View, Text, ToastAndroid } from "react-native";
import { createContext, useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const bookMarkContext = createContext();
const BookMarkContextProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([]);

    // Save Bookmarks
    const saveBookMark = async (value) => {
        const confirmBookmark = bookmarks.some(
            (item) => item.title === value.title
        );
        try {
            if (confirmBookmark) {
                setBookmarks(
                    bookmarks.filter((item) => item.title !== value.title)
                );
                await AsyncStorage.setItem(
                    "bookmarks",
                    JSON.stringify(bookmarks)
                );
                ToastAndroid.show("Removed from bookmarks", ToastAndroid.SHORT);
            } else {
                setBookmarks([...bookmarks, value]);
                await AsyncStorage.setItem(
                    "bookmarks",
                    JSON.stringify(bookmarks)
                );

                ToastAndroid.show("Added to bookmarks", ToastAndroid.SHORT);
            }
        } catch (e) {
            console.log(e);
        }
    };

    // Get Bookmarks FROM ASYNC STORAGE
    const getBookmarks = useCallback(() => {
        () => {
            AsyncStorage.getItem("bookmarks").then((res) => {
                setBookmarks(JSON.parse(res));
            });
        };
    }, []);

    useEffect(() => {
        getBookmarks();
    }, [bookmarks]);
    return (
        <bookMarkContext.Provider value={{ bookmarks, saveBookMark }}>
            {children}
        </bookMarkContext.Provider>
    );
};

export default BookMarkContextProvider;
