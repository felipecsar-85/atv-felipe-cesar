function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Salgados"
        onPress={() => navigation.navigate('Salgados')}
      />

      <Button
        title="Bebidas"
        onPress={() => navigation.navigate('Bebidas')}
      />
    </View>
  );
}
