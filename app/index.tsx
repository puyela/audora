import { Text, View, StyleProp, StatusBar } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Auduro</Text>
      <StatusBar barStyle="default" />
    </View>
  );
}
