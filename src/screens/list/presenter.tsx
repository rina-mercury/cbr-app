import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { CurrencyType } from "../../lib/types";
import styles from "./styles";

function ListEmptyComponent() {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Empty list</Text>
    </View>
  );
}

const keyExtractor = ({ charCode }: CurrencyType) => {
  return charCode;
};

export function CurrListPresenter({
  data,
  goToDetails,
  loading,
  lastUpdate,
  onRefresh,
}: {
  data: CurrencyType[];
  goToDetails: (data: CurrencyType) => void;
  loading: boolean;
  lastUpdate: number | null;
  onRefresh(): void;
}) {
  const [circleStatus, setCircleStatus] = useState(loading);

  const renderItem = useCallback(
    ({ item }: any) => {
      return (
        <TouchableOpacity style={styles.card} onPress={() => goToDetails(item)}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>{item.charCode}</Text>
            <Text>{item.nominal}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [goToDetails]
  );

  const circleColor = useMemo(() => {
    console.log(loading);
    if (loading) {
      return { backgroundColor: "green" };
    }
    return { backgroundColor: "red" };
  }, [loading]);

  const renderCircle = useMemo(() => {
    return <View style={[styles.circle, circleColor]} />;
  }, [circleColor]);

  const renderTopBlock = useMemo(() => {
    return (
      <View style={styles.topBlock}>
        {renderCircle}
        <View>
          <Text>Loading: {loading.toString()}</Text>
          <Text>
            Last update:
            {lastUpdate ? new Date(lastUpdate).toLocaleTimeString() : null}
          </Text>
        </View>
      </View>
    );
  }, [lastUpdate, loading]);

  return (
    <SafeAreaView style={styles.container}>
      {renderTopBlock}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={{ paddingBottom: 100 }}
        onRefresh={onRefresh}
        refreshing={loading}
      />
    </SafeAreaView>
  );
}
