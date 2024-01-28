import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";

const useHome = () => {
  const [name, setName] = useState("");
  const redurs = useRef(0);
  const redursIndex = useRef();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Titulo",
      headerLargeTitle: true,
    });
    redurs.current++;
    console.log("Redurs: ", redurs.current);
  }, []);

  const handleOnChange = useCallback((newName: string) => {
    setName(newName);
    //   console.log("useCallback", name);
  }, []);

  return {
    name,
    handleOnChange,
    redursIndex
  };
};

export { useHome };
