import { View, Text, StyleSheet } from "react-native"
import React from 'react';
import { useTheme } from "../providers/theme.provider";

export const Home = () => {

    const theme = useTheme()

    const style = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background
        },
        text: {
            color: theme.colors.primary
        }
    })

    return (
        <View style={style.container}>
            <Text style={style.text}>Home Screen</Text>
        </View>
    )
}