import { Text, View } from "react-native";

const data = [
  {
    id: 1,
    product: "Product 1",
  },
  {
    id: 2,
    product: "Product 2",
  },
  {
    id: 3,
    product: "Product 3",
  },
  {
    id: 4,
    product: "Product 4",
  },
  {
    id: 5,
    product: "Product 5",
  },
];

export default function NotRecommendedProducts({}) {
  return (
    <View>
      <Text>{data[0].name}</Text>
      <Text>{data[1].name}</Text>
      <Text>{data[2].name}</Text>
      <Text>{data[3].name}</Text>
      <Text>{data[4].name}</Text>
    </View>
  );
}
