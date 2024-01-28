import React from "react";
import { FlatList, ScrollView, Text, TextInput, View } from "react-native";
import { useHome } from "./useHome";
import { styles } from "./styles";

const HomeScreen = () => {
  const { name, handleOnChange, redursIndex } = useHome();

  const itens = [
    { title: "oi", id: 1 },
    { title: "ola", id: 2 },
    { title: "oiiii", id: 3 },
    { title: "oiiii", id: 4 },
    { title: "oiiii", id: 5 },
    { title: "oiiii", id: 6 },
    { title: "oiiii", id: 7 },
    { title: "oiiii", id: 8 },
  ];

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.text}>{item.title}</Text>}
        ListHeaderComponent={header(name, handleOnChange)}
      />
    </ScrollView>
  );
};

const header = (name: string, handleOnChange: (text: string) => void) => {
  return (
    <View>
      <Text style={styles.title}>Digite Embaixo:</Text>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        // ref={redursIndex}
        style={styles.input}
        value={name}
        onChangeText={(text) => handleOnChange(text)}
        placeholder="Nome"
      />
    </View>
  );
};

export default HomeScreen;

// const ListHeader = () => {
//   return (
//     <View style={styles.headerFooterStyle}>
//       <Text style={styles.textStyle}>Planetas do Sistema Solar</Text>
//     </View>
//   );
// };
