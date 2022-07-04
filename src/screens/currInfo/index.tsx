import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { RootStackParamList } from "../../App";

import { CurrInfoPresenter } from "./presenter";

export type UserInfoProps = NativeStackScreenProps<
  RootStackParamList,
  "CurrencyInfo"
>;

export const UserInfo = ({ route }: UserInfoProps) => {
  const { item } = route.params;

  return <CurrInfoPresenter {...item} />;
};
