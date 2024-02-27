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
  const [totalInvestido, setTotalInvestido] = useState(0);
  const [ganhoEmJuros, setGanhoEmJuros] = useState(0);
  const [total, setTotal] = useState(0);

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
    const taxaJurosMensal =
      periodoJuros === "ANO"
        ? parseFloat(taxaJuros) / 12 / 100
        : parseFloat(taxaJuros) / 100;

    const periodoEmMeses =
      periodoInvestimento === "ANO"
        ? parseFloat(periodo) * 12
        : parseFloat(periodo);

    const investido =
      parseFloat(inicial) +
      parseFloat(aporteMensal) * parseFloat(periodoEmMeses);

    const montanteFinal =
      // M = C * (1+i)**t + A * (((1+i**t) -1)/i)
      inicial * (1 + taxaJurosMensal) ** periodoEmMeses +
      aporteMensal *
        (((1 + taxaJurosMensal) ** periodoEmMeses - 1) / taxaJurosMensal);

    setTotal(montanteFinal);
    setTotalInvestido(investido);
    setGanhoEmJuros(montanteFinal - investido);
  }
  function limparCampos() {
    setInicial(null);
    setAporteMensal(null);
    setTaxaJuros(null);
    setPeriodo(null);
    setPeriodoJuros("");
    setPeriodoInvestimento("");
    setTotalInvestido(0);
    setTotal(0);
    setGanhoEmJuros(0);
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
            onChangeText={(e) =>
              setAporteMensal(
                e.toLocaleString("pt-BR", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })
              )
            }
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
              <Select.Item label="Anual" value="ANO" />
              <Select.Item label="Mensal" value="MES" />
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
              <Select.Item label="Anual" value="ANO" />
              <Select.Item label="Mensal" value="MES" />
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
              <Text style={[styles.corTexto1]}>
                R${" "}
                {totalInvestido.toLocaleString("pt-BR", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </Text>
            </View>
            <View style={styles.resultLine}>
              <Text style={[styles.corTexto1, styles.bold]}>
                Total ganho em juros
              </Text>
              <Text style={[styles.corTexto1]}>
                R${" "}
                {ganhoEmJuros?.toLocaleString("pt-BR", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </Text>
            </View>
            <View style={styles.resultLine}>
              <Text style={[styles.corTexto1, styles.bold]}>Total</Text>
              <Text style={[styles.corTexto1]}>
                R${" "}
                {total?.toLocaleString("pt-BR", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </Text>
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
