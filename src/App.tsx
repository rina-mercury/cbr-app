import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import { UsersList } from "./screens/list";
import { store } from "./store/currencies/dataStore";
import { UserInfo } from "./screens/currInfo";
import { CurrencyType } from "./lib/types";

export type RootStackParamList = {
  Home: undefined;
  CurrencyInfo: { item: CurrencyType };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={UsersList} />
          <Stack.Screen name="CurrencyInfo" component={UserInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
