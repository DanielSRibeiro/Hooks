import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../routes/Home";
import { Route } from "./types";

const Stack = createNativeStackNavigator();

const AppRotas = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator initialRouteName={Route.Home}>
      <Screen name={Route.Home} component={Home} />
    </Navigator>
  );
};

export default AppRotas;
