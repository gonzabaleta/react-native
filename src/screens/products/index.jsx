import { Button, FlatList, Text, View } from "react-native";

import ProductItem from "../../components/product-item";
import { products } from "../../data/products";
import { styles } from "./styles";

export default function ProductsScreen({ navigation, route }) {
  const { categoryId } = route.params;

  const filteredProducts = products.filter(
    (product) => product.categoryId === categoryId
  );

  const onSelected = (item) => {
    navigation.navigate("ProductDetails", {
      productId: item.id,
      name: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
