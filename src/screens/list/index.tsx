import React, { useCallback, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";

import { CurrListPresenter } from "./presenter";
import { CurrencyType } from "../../lib/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../lib/api";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const UsersList = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  const { currencies, loading, lastUpdate, serverOK } = useSelector(
    (state: {
      data: {
        currencies: CurrencyType[];
        loading: boolean;
        lastUpdate: number | null;
        serverOK: boolean;
      };
    }) => state.data
  );

  const goToDetails = useCallback(
    (item: CurrencyType) => {
      navigation.navigate("CurrencyInfo", { item });
    },
    [navigation]
  );

  const onRefresh = useCallback(() => {
    // @ts-expect-error
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrListPresenter
      data={currencies}
      loading={loading}
      goToDetails={goToDetails}
      lastUpdate={lastUpdate}
      onRefresh={onRefresh}
    />
  );
};
