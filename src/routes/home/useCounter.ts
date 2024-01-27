import { SetStateAction, useCallback, useState } from "react";

const useCouter = () => {
  const [name, setName] = useState("");

  const handeOnChangeText = useCallback((text: string) => {
    setName(text);
  }, []);

  return {
    name,
    handeOnChangeText,
  };
};

export default useCouter;
