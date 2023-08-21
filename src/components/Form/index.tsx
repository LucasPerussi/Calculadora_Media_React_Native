import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import ResultMedia from "./Result";
import styles from "./style";

export default function Form() {
  const [counter, setCounter] = useState<number>(0);
  const [acumulator, setAcumulator] = useState<number>(0);
  const [grade, setGrade] = useState<number>(0);
  const [messageMedia, setMessageMedia] = useState<string>("Informe as Notas para Calcular");
  const [media, setMedia] = useState<number>(0);
  const [labelMedia, setLabelMedia] = useState<string>('');
  const [textButton, setTextButton] = useState<string>("Calcular Média");

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  function setMediaLabel(calculatedMedia: number) {
    setLabelMedia(calculatedMedia.toFixed(2).toString());
  }

  function mediaCalculator() {
    if (counter >= 2) {
      if (media === 0) {
        const calculatedMedia = acumulator / counter;
        setMedia(calculatedMedia);
        setMessageMedia("A média das " + counter + " informadas é:");
        setMediaLabel(calculatedMedia);
        setTextButton("Limpar Dados");
      } else {
        setAcumulator(0);
        setCounter(0);
        setGrade(0);
        setTextButton("Calcular Média");
        setMessageMedia("");
        setLabelMedia('');
      }
    } else {
      setMessageMedia("Você precisa de no mínimo 2 notas para calcular a média");
      setMedia(0);
      setLabelMedia('');
    }
  }

  const addGrade = () => {
    setAcumulator(acumulator + grade);
    setCounter(counter + 1);
    setGrade(0);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.formContext}>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Adicionar Nota:</Text>

          <TextInput
            style={styles.input}
            onChangeText={(text) => setGrade(Number(text))}
            value={grade.toString()}
            placeholder="9.5"
            keyboardType="numeric"
          />

          <Text style={styles.formLabel}>Acumulado: {acumulator}</Text>
          <Text style={styles.formLabel}>Notas Inseridas: {counter}</Text>

          <TouchableOpacity
            style={styles.ButtonCalculator}
            onPress={() => {
              addGrade();
              dismissKeyboard();
            }}
          >
            <Text style={styles.textButtonCalculator}>Adicionar Nota</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ButtonCalculator}
            onPress={() => {
              mediaCalculator();
            }}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
        <ResultMedia messageResultMedia={messageMedia} result={labelMedia} />
      </View>
    </TouchableWithoutFeedback>
  );
}
