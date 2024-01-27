import React from "react";
import useCounter from "./useCounter";
import { StyleSheet, Text, TextInput } from "react-native";
// import styles from "./styles";

export default function Home() {
  const { name, handeOnChangeText } = useCounter();
  // const { container } = styles;

  return (
    <>
      <Text>{name}</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => handeOnChangeText(text)}
        value={name}
        placeholder="Set the Name"
      />
    </>
  );
}

// const counter = () => {
//   const { name, setName } = useCounter();
//   const { container } = styles;

//   return (
//     <>
//       <Text>{name}</Text>
//       <TextInput
//         editable
//         multiline={false}
//         value={name || ""}
//         style={container}
//       />
//     </>
//   );
// };

// export default counter;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
