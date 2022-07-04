import { Button, FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { CategoryItem } from "../../components";
import { selectCategory } from "../../store/actions/category.actions";
import { styles } from "./styles";

export default function CategoriesScreen({ navigation }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const categorySelected = useSelector((state) => state.category.selected);
  const categoryProducts = useSelector(
    (state) => state.product.filteredProducts
  );

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", { title: item.title });
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
