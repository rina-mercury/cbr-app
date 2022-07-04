import React from "react";
import { SafeAreaView, Image, View, Text } from "react-native";
import { CurrencyType } from "../../lib/types";

export function CurrInfoPresenter({
  name,
  charCode,
  nominal,
  enName,
  value,
}: CurrencyType) {
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Text>Name: {name}</Text>
        <Text>English name: {enName}</Text>
        <Text>Char Code: {charCode}</Text>
        <Text>Nominal: {nominal}</Text>
        <Text>Value: {value}</Text>
      </View>
    </SafeAreaView>
  );
}
