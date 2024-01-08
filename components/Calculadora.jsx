import { Button, CheckIcon, Input, Select } from "native-base";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Calculadora() {
  const [inicial, setInicial] = useState(null);
  const [aporteMensal, setAporteMensal] = useState(null);
  const [taxaJuros, setTaxaJuros] = useState(null);
  const [periodoJuros, setPeriodoJuros] = useState("");
  const [periodo, setPeriodo] = useState(null);
  const [periodoInvestimento, setPeriodoInvestimento] = useState("");
  const [resultado, setResultado] = useState(true);

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      padding: 15,
    },
    header: {
      height: 100,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#5F0F40",
    },
    inputContainer: {
      padding: 10,
    },
    label: {
      marginLeft: 15,
    },
    botaoContainer: {
      width: "100%",
      alignItems: "center",
      marginVertical: 30,
    },
    botaoCalcular: {
      width: "40%",
      margin: 10,
    },
    botaoLimpar: {
      width: "40%",
      margin: 10,
    },
    selectContainer: {
      width: "100%",
      marginTop: 10,
    },
    result: {
      width: "100%",
      justifyContent: "space-between",
      padding: 15,
    },
    resultLine: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 15,
      borderBottomWidth: 1,
      borderColor: "lightgray",
    },
    corTexto1: {
      color: "#5F0F40",
    },
    bold: {
      fontWeight: "bold",
    },
    corTextoBranco: {
      color: "#FFF",
    },
  });

  function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.corTextoBranco}>Header</Text>
      </View>
    );
  }

  function calcular() {
    console.log({
      valorInicial: inicial,
      aporteMensal: aporteMensal,
      taxaJuros: taxaJuros,
      periodo: periodo,
      periodoInvestimento: periodoInvestimento,
      periodoJuros: periodoJuros,
    });
  }

  function limparCampos() {
    setInicial(null);
    setAporteMensal(null);
    setTaxaJuros(null);
    setPeriodo(null);
    setPeriodoJuros("");
    setPeriodoInvestimento("");
  }

  return (
    <>
      <Header />
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.container}
      >
        <View style={styles.inputContainer}>
          <Text style={[styles.label, styles.corTexto1]}>Valor inicial</Text>
          <Input
            keyboardType="numeric"
            mx="3"
            w="100%"
            value={inicial}
            onChangeText={(e) => setInicial(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.label, styles.corTexto1]}>Aporte mensal</Text>
          <Input
            keyboardType="numeric"
            mx="3"
            w="100%"
            value={aporteMensal}
            onChangeText={(e) => setAporteMensal(e)}
          />
        </View>
        {/* *********************************************************************** */}
        <View style={{ ...styles.selectContainer }}>
          <Text style={[styles.label, styles.corTexto1]}>Taxa de juros</Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}
          >
            <Input
              keyboardType="numeric"
              mx="3"
              w="50%"
              value={taxaJuros}
              onChangeText={(e) => setTaxaJuros(e)}
            />
            <Select
              selectedValue={periodoJuros}
              minW={150}
              placeholder="Anual/Mensal"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setPeriodoJuros(itemValue)}
            >
              <Select.Item label="" value={null} />
              <Select.Item label="Ano" value="ANO" />
              <Select.Item label="Mês" value="MES" />
            </Select>
          </View>
        </View>
        {/* *********************************************************************** */}
        <View style={{ ...styles.selectContainer }}>
          <Text style={[styles.label, styles.corTexto1]}>Período</Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}
          >
            <Input
              keyboardType="numeric"
              mx="3"
              w="50%"
              value={periodo}
              onChangeText={(e) => setPeriodo(e)}
            />
            <Select
              selectedValue={periodoInvestimento}
              minW={150}
              placeholder="Anos/Meses"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setPeriodoInvestimento(itemValue)}
            >
              <Select.Item label="" value={null} />
              <Select.Item label="Ano" value="ANO" />
              <Select.Item label="Mês" value="MES" />
            </Select>
          </View>
        </View>

        {/* ********************************************************************** */}
        {resultado && (
          <View style={styles.result}>
            <View style={styles.resultLine}>
              <Text style={[styles.corTexto1, styles.bold]}>
                Total Investido
              </Text>
              <Text style={[styles.corTexto1]}>R$ 1.000,00</Text>
            </View>
            <View style={styles.resultLine}>
              <Text style={[styles.corTexto1, styles.bold]}>
                Total ganho em juros
              </Text>
              <Text style={[styles.corTexto1]}>R$ 1.000,00</Text>
            </View>
            <View style={styles.resultLine}>
              <Text style={[styles.corTexto1, styles.bold]}>Total</Text>
              <Text style={[styles.corTexto1]}>R$ 1.000,00</Text>
            </View>
          </View>
        )}

        {/* ********************************************************************** */}

        <View style={styles.botaoContainer}>
          <Button
            style={styles.botaoCalcular}
            backgroundColor="#5F0F40"
            onPress={() => calcular()}
          >
            Calcular
          </Button>
          <Button
            variant="subtle"
            colorScheme="secondary"
            style={styles.botaoLimpar}
            onPress={() => limparCampos()}
          >
            Limpar
          </Button>
        </View>
      </ScrollView>
    </>
  );
}
