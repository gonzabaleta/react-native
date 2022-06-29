import { Button, FlatList, Text, View } from "react-native";

import { CategoryItem } from "../../components";
import { categories } from "../../data/categories";
import { styles } from "./styles";

export default function CategoriesScreen({ navigation }) {
  const onSelected = (item) => {
    navigation.navigate("Products", { categoryId: item.id, title: item.title });
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
