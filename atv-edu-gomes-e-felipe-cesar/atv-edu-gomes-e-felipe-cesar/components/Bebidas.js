import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const bebidas = [
  {
    id: '1',
    nome: 'Refrigerante Lata',
    preco: 'R$ 6,00',
    descricao: 'Lata de 350ml (Coca-Cola, Guaraná ou Soda).',
    imagem: require('../assets/cocacola.jpg'),
  },
  {
    id: '2',
    nome: 'Suco Natural de Laranja',
    preco: 'R$ 8,00',
    descricao: 'Copo de 400ml feito com a fruta na hora.',
    imagem: require('../assets/suconatural.jpg'),
  },
  {
    id: '3',
    nome: 'Água Mineral',
    preco: 'R$ 3,50',
    descricao: 'Garrafa de 500ml sem gás.',
    imagem: require('../assets/aguamineral.jpg'),
  },
  {
    id: '4',
    nome: 'Chá Gelado',
    preco: 'R$ 6,50',
    descricao: 'Garrafa de 450ml bem gelado.',
    imagem: require('../assets/chagelado.jpg'),
  },
  {
    id: '5',
    nome: 'Café Expresso',
    preco: 'R$ 4,50',
    descricao: 'Xícara de café tradicional encorpado.',
    imagem: require('../assets/cafeexpresso.jpg'),
  },
];

export default function Bebidas() {
  return (
    <View style={styles.container}>
      <FlatList
        data={bebidas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
          }
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#344D0E',
  },
  descricao: {
    fontSize: 12,
    color: '#ffffff',
    marginVertical: 2,
  },
  preco: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0275d8',
  },
});