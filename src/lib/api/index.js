import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mergedArrays, parseXml } from "./utils";
import { CurrencyType } from "../types";

const dailyUrl = "https://www.cbr.ru/scripts/XML_daily.asp";
const dailyEnUrl = "https://www.cbr.ru/scripts/XML_daily_eng.asp";

export const DB_KEY = "@db";
export const LAST_UPDATE = "@lastUpdate";

export const fetchData = createAsyncThunk("data/fetch", async () => {
  let array;
  await axios
    .all([axios.get(dailyEnUrl), axios.get(dailyUrl)])
    .then(
      axios.spread((...responses) => {
        const enArr = [...parseXml(responses[0])];
        const ruArr = [...parseXml(responses[1])];
        array = mergedArrays(ruArr, enArr);
        AsyncStorage.setItem(DB_KEY, JSON.stringify(array));
        AsyncStorage.setItem(LAST_UPDATE, JSON.stringify(new Date()));
      })
    )
    .catch(async (err) => {
      console.warn(
        "There has been a problem with your fetch operation, fetched from local storage",
        err
      );
      const localArray = await AsyncStorage.getItem(DB_KEY);
      if (localArray !== null) {
        array = JSON.parse(localArray);
      }
    });

  return array;
});
