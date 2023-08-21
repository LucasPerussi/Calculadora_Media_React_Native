import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultMedia(props: any){
    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultMedia}</Text>
            <Text style={styles.number}>{props.result}</Text>
        </View>
    );
}