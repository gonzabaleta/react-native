import { FlatList, View } from "react-native";
import {
  filterProducts,
  selectProduct,
} from "../../store/actions/product.action";
import { useDispatch, useSelector } from "react-redux";

import ProductItem from "../../components/product-item";
import { styles } from "./styles";
import { useEffect } from "react";

export default function ProductsScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.product.filteredProducts
  );
  const category = useSelector((state) => state.category.selected);

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("ProductDetails", {
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
