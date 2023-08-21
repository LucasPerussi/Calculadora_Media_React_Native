import React from "react";
import styles from "./style";
import { View, Text } from "react-native";

const Title: React.FC = () => {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Calculadora Média</Text>
        </View>
    );
};

export default Title;